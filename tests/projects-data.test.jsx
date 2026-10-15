import { describe, expect, it } from "vitest";
import { projects } from "../src/data/projects.js";

// Vite resolves this at transform time, so the test sees exactly the files that will ship.
const shipped = new Set(Object.keys(import.meta.glob("../public/projects/*.webp")).map((path) => path.split("/").pop()));

describe("project data", () => {
  it("gives every project a screenshot with alt text and a caption", () => {
    for (const { title, image } of projects) {
      expect(image, title).toBeTruthy();
      expect(image.alt.length, `${title} alt`).toBeGreaterThan(20);
      expect(image.caption, `${title} caption`).toBeTruthy();
    }
  });

  it("ships both screenshot sizes for every project, plus the phone view", () => {
    for (const { image } of projects) {
      for (const width of [800, 1600]) expect(shipped.has(`${image.name}-${width}.webp`), `${image.name}-${width}`).toBe(true);
      if (image.phone) expect(shipped.has(`${image.phone.name}-480.webp`), image.phone.name).toBe(true);
    }
  });
});
