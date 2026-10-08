export const siteUrl = "https://portfolio-orpin-eight-240etcohnd.vercel.app";

const siteTitle = "Biró Ádám — Full-Stack Developer";
const pages = {
  "/": {
    title: siteTitle,
    description: "Computer Science student at the University of Debrecen. Explore my React and JavaScript projects, Python backends and part-time remote availability.",
  },
  "/about": {
    title: `About | ${siteTitle}`,
    description: "Meet Ádám Biró, a Computer Science student in Debrecen building web applications with React, JavaScript, Python and FastAPI.",
  },
};

export function getPageMetadata(pathname) {
  const path = pathname.replace(/\/+$/, "") || "/";
  const page = pages[path];
  return page
    ? { ...page, canonical: `${siteUrl}${path === "/" ? "/" : path}`, robots: "index, follow" }
    : { title: `Page not found | ${siteTitle}`, description: "This page could not be found. Explore Ádám Biró's projects or get in touch from the portfolio home page.", canonical: null, robots: "noindex, follow" };
}

export function metadataTags(pathname) {
  const page = getPageMetadata(pathname);
  return [
    { tag: "title", children: page.title },
    { tag: "meta", attrs: { name: "description", content: page.description } },
    { tag: "meta", attrs: { name: "robots", content: page.robots } },
    { tag: "meta", attrs: { property: "og:title", content: page.title } },
    { tag: "meta", attrs: { property: "og:description", content: page.description } },
    { tag: "meta", attrs: { property: "og:type", content: "website" } },
    ...(page.canonical ? [
      { tag: "link", attrs: { rel: "canonical", href: page.canonical } },
      { tag: "meta", attrs: { property: "og:url", content: page.canonical } },
    ] : []),
  ];
}
