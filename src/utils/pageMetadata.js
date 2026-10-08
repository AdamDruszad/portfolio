import { getPageMetadata } from "../data/site";

export function updatePageMetadata(pathname) {
  const page = getPageMetadata(pathname);
  document.title = page.title;
  const attributes = [
    ['meta[name="description"]', "content", page.description],
    ['meta[name="robots"]', "content", page.robots],
    ['meta[property="og:title"]', "content", page.title],
    ['meta[property="og:description"]', "content", page.description],
    ['meta[property="og:url"]', "content", page.canonical],
    ['link[rel="canonical"]', "href", page.canonical],
  ];
  for (const [selector, attribute, value] of attributes) {
    let element = document.head.querySelector(selector);
    if (!value) { element?.remove(); continue; }
    if (!element) {
      const [, tag, key, selectorValue] = selector.match(/^(\w+)\[(\w+)="([^"]+)"\]$/);
      element = document.createElement(tag);
      element.setAttribute(key, selectorValue);
      document.head.append(element);
    }
    element.setAttribute(attribute, value);
  }
}
