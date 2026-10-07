export default function BrandVisual({ compact = false }) {
  return (
    <div className={`brand-visual${compact ? " brand-visual--compact" : ""}`} aria-hidden="true">
      <div className="brand-visual__top"><span>IDEAS → INTERFACES</span><span>↗</span></div>
      <svg className="brand-visual__art" viewBox="0 0 480 420" fill="none">
        <g className="brand-orbits" stroke="currentColor" strokeWidth="0.8">
          <ellipse cx="240" cy="210" rx="192" ry="112" transform="rotate(-35 240 210)" />
          <ellipse cx="240" cy="210" rx="192" ry="112" transform="rotate(35 240 210)" />
          <ellipse cx="240" cy="210" rx="192" ry="112" transform="rotate(90 240 210)" />
        </g>
        <g className="brand-code" strokeWidth="24" strokeLinejoin="miter">
          <path d="m172 150-61 60 61 60M308 150l61 60-61 60" stroke="#f4f3ec" />
          <path d="m266 118-52 184" stroke="#d4f65b" />
        </g>
        <circle cx="385" cy="118" r="8" fill="#d4f65b" />
        <path d="M58 330v16m-8-8h16M398 65v16m-8-8h16" stroke="#d4f65b" />
      </svg>
      <div className="brand-visual__bottom"><span>LOGIC MEETS<br />A LITTLE CURIOSITY.</span><span className="brand-visual__signature">a/d.</span></div>
    </div>
  );
}

