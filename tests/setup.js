import { vi } from "vitest";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
Object.defineProperty(HTMLElement.prototype, "scrollIntoView", { configurable: true, value: vi.fn() });
window.scrollTo = vi.fn();
