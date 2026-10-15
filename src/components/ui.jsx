import Arrow from "./Arrow";

// Margin note: the small monospace label that introduces a section or entry.
export function Note({ index, children, className = "" }) {
  return (
    <p className={`note ${className}`.trim()}>
      {index && <span className="note-index">{index} /</span>}{index && " "}{children}
    </p>
  );
}

// Availability line with the pen-blue status dot.
export function Status({ children, className = "" }) {
  return (
    <p className={`status ${className}`.trim()}>
      <span className="status-dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

// Off-site link: always a new tab, never leaks the opener, arrow points out.
export function ExternalLink({ href, label, className = "text-link", children }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={className}>
      {children} <Arrow />
    </a>
  );
}
