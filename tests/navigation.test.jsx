import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../src/App";

vi.mock("@vercel/analytics/react", () => ({ Analytics: () => null }));
vi.mock("@vercel/speed-insights/react", () => ({ SpeedInsights: () => null }));
let container, root;

beforeEach(() => {
  localStorage.clear();
  container = document.createElement("div");
  document.body.append(container);
  root = createRoot(container);
});
afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
});
async function render(path) {
  window.history.replaceState({}, "", path);
  await act(async () => root.render(<App />));
}
async function click(element) {
  await act(async () => element.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true })));
}
function navLink(label) {
  return [...container.querySelectorAll("nav a")].find((a) => a.textContent === label && !a.closest("[hidden]"));
}

describe("portfolio navigation", () => {
  it("opens the projects section from About without a timeout", async () => {
    await render("/about");
    await click(navLink("Projects"));
    expect(window.location.pathname).toBe("/");
    expect(window.location.hash).toBe("#projects");
    expect(document.activeElement.id).toBe("projects");
    expect(container.querySelector("#projects h2").textContent).toBe("What I've built.");
  });

  it("Escape closes mobile navigation and returns focus to its toggle", async () => {
    await render("/");
    const toggle = container.querySelector('button[aria-controls="mobile-navigation"]');
    await click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    await act(async () => document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true })));
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(container.querySelector("#mobile-navigation").hidden).toBe(true);
    expect(document.activeElement).toBe(toggle);
  });

  it("following a mobile link closes the disclosure and updates the route", async () => {
    await render("/");
    const toggle = container.querySelector('button[aria-controls="mobile-navigation"]');
    await click(toggle);
    await click(container.querySelector('#mobile-navigation a[href="/about"]'));
    expect(window.location.pathname).toBe("/about");
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(container.querySelector("h1").textContent).toBe("About me");
    expect(document.title).toContain("About");
  });

  it("the Contact link from About resolves to a focusable contact section", async () => {
    await render("/about");
    await click(navLink("Contact"));
    expect(window.location.hash).toBe("#contact");
    expect(document.activeElement.id).toBe("contact");
    expect(container.querySelector('#contact a[href^="mailto:"]')).not.toBeNull();
  });

  it("Back to top scrolls the current route instead of navigating home", async () => {
    await render("/about");
    expect(container.querySelector("h1").textContent).toBe("About me");
    await click(container.querySelector(".back-to-top"));
    expect(window.location.pathname).toBe("/about");
    expect(window.location.hash).toBe("#main-content");
    expect(document.activeElement.id).toBe("main-content");
    expect(container.querySelector("h1").textContent).toBe("About me");
  });

  it("unknown routes provide a working route back home", async () => {
    await render("/does-not-exist");
    expect(container.querySelector("h1").textContent).toBe("Page not found");
    await click(container.querySelector('main a[href="/"]'));
    expect(window.location.pathname).toBe("/");
    expect(container.querySelector("#projects")).not.toBeNull();
  });

  it("remembers the selected theme across routes and remounts", async () => {
    await render("/");
    expect(document.documentElement.dataset.theme).toBe("dark");
    await click(container.querySelector('button[aria-label="Switch to light mode"]'));
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(localStorage.getItem("portfolio-theme")).toBe("light");
    await click(navLink("About"));
    expect(document.documentElement.dataset.theme).toBe("light");
    await act(async () => root.unmount());
    root = createRoot(container);
    await render("/");
    expect(document.documentElement.dataset.theme).toBe("light");
    await click(container.querySelector('button[aria-label="Switch to dark mode"]'));
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("dismisses the mobile menu when clicking outside navigation", async () => {
    await render("/");
    const toggle = container.querySelector('button[aria-controls="mobile-navigation"]');
    await click(toggle);
    await act(async () => container.querySelector("main").dispatchEvent(new Event("pointerdown", { bubbles: true })));
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("updates descriptions and canonical URLs when navigating, without duplicate tags", async () => {
    await render("/about");
    expect(document.querySelector('meta[name="description"]').content).toContain("Meet Ádám Biró");
    expect(document.querySelector('link[rel="canonical"]').href).toMatch(/\/about$/);
    await click(navLink("Projects"));
    expect(document.querySelector('link[rel="canonical"]').href).toBe("https://portfolio-orpin-eight-240etcohnd.vercel.app/");
    expect(document.querySelector('meta[property="og:title"]').content).toBe(document.title);
    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
  });

  it("marks missing pages noindex and restores indexability after returning home", async () => {
    await render("/missing-page");
    expect(document.querySelector('meta[name="robots"]').content).toBe("noindex, follow");
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    await click(container.querySelector('main a[href="/"]'));
    expect(document.querySelector('meta[name="robots"]').content).toBe("index, follow");
    expect(document.querySelector('link[rel="canonical"]')).not.toBeNull();
  });

  it("still changes theme when browser storage is blocked", async () => {
    const read = vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => { throw new Error("Storage blocked"); });
    const write = vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => { throw new Error("Storage blocked"); });
    try {
      await render("/");
      await click(container.querySelector('button[aria-label="Switch to light mode"]'));
      expect(document.documentElement.dataset.theme).toBe("light");
    } finally { read.mockRestore(); write.mockRestore(); }
  });
});
