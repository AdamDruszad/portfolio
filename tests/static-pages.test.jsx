import { describe, expect, it } from "vitest";
import { withMetadata } from "../scripts/static-pages.js";

describe("static route metadata", () => {
  const entry = '<html><head><title>Old title</title><meta name="description" content="Old description"><meta name="robots" content="index, follow"><meta property="og:title" content="Old title"><link rel="canonical" href="https://old.example/"><script type="module" src="/assets/app.js"></script></head><body><div id="root"></div></body></html>';

  it("emits About metadata in the initial HTML while retaining app assets", () => {
    const page = new DOMParser().parseFromString(withMetadata(entry, "/about"), "text/html");
    expect(page.title).toContain("About |");
    expect(page.querySelectorAll("title")).toHaveLength(1);
    expect(page.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(page.querySelector('link[rel="canonical"]').getAttribute("href")).toMatch(/\/about$/);
    expect(page.querySelector('script[type="module"]').getAttribute("src")).toBe("/assets/app.js");
    expect(page.querySelector("#root")).not.toBeNull();
  });

  it("removes home canonical and index directives from the static error page", () => {
    const page = new DOMParser().parseFromString(withMetadata(entry, "/missing"), "text/html");
    expect(page.title).toContain("Page not found");
    expect(page.querySelector('meta[name="robots"]').content).toBe("noindex, follow");
    expect(page.querySelector('link[rel="canonical"]')).toBeNull();
    expect(page.querySelector('meta[property="og:url"]')).toBeNull();
  });
});
