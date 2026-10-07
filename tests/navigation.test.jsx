import { act } from "react";
import { createRoot } from "react-dom/client";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "../src/App";

vi.mock("@vercel/analytics/react", () => ({ Analytics: () => null }));
vi.mock("@vercel/speed-insights/react", () => ({ SpeedInsights: () => null }));
let container, root;

beforeEach(() => {
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
    expect(container.querySelector("#projects h2").textContent).toBe("What I've built");
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

  it("unknown routes provide a working route back home", async () => {
    await render("/does-not-exist");
    expect(container.querySelector("h1").textContent).toBe("Page not found");
    await click(container.querySelector('main a[href="/"]'));
    expect(window.location.pathname).toBe("/");
    expect(container.querySelector("#projects")).not.toBeNull();
  });
});
