import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { getPageMetadata, metadataTags, siteUrl } from "../src/data/site.js";

const escapeHtml = (value) => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

function serializeTags(pathname) {
  return metadataTags(pathname).map(({ tag, attrs = {}, children }) => {
    const attributes = Object.entries(attrs).map(([key, value]) => ` ${key}="${escapeHtml(value)}"`).join("");
    return children ? `<${tag}${attributes}>${escapeHtml(children)}</${tag}>` : `<${tag}${attributes}>`;
  }).join("\n    ");
}

export function withMetadata(html, pathname) {
  const withoutMetadata = html
    .replace(/<title>[^<]*<\/title>\s*/g, "")
    .replace(/<meta\s+(?:name="(?:description|robots)"|property="og:[^"]+")[^>]*>\s*/g, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/g, "");
  return withoutMetadata.replace("</head>", `    ${serializeTags(pathname)}\n  </head>`);
}

export default function staticPages() {
  let outputDirectory;
  let isBuild = false;
  return {
    name: "portfolio-static-pages",
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
      isBuild = config.command === "build";
    },
    transformIndexHtml(html) { return withMetadata(html, "/"); },
    async closeBundle() {
      if (!isBuild) return;
      const html = await readFile(resolve(outputDirectory, "index.html"), "utf8");
      await Promise.all([
        writeFile(resolve(outputDirectory, "about.html"), withMetadata(html, "/about")),
        writeFile(resolve(outputDirectory, "404.html"), withMetadata(html, "/not-found")),
        writeFile(resolve(outputDirectory, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`),
        writeFile(resolve(outputDirectory, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${["/", "/about"].map(path => `<url><loc>${getPageMetadata(path).canonical}</loc></url>`).join("")}</urlset>\n`),
      ]);
    },
  };
}
