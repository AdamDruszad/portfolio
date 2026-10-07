import { vi } from "vitest";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
Object.defineProperty(HTMLElement.prototype, "scrollIntoView", { configurable: true, value: vi.fn() });
window.scrollTo = vi.fn();
window.matchMedia = vi.fn((query) => ({
  matches: false, media: query, addEventListener: vi.fn(), removeEventListener: vi.fn(),
}));
