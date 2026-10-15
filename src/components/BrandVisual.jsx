// "Ideas into interfaces", drawn literally: a dashed paper sketch becomes a finished card.
// Decorative only; colours come from CSS classes so both themes stay in sync.
export default function BrandVisual({ compact = false }) {
  return (
    <div className={`brand-visual${compact ? " brand-visual--compact" : ""}`} aria-hidden="true">
      <div className="brand-visual__row">
        <span>IDEAS → INTERFACES</span>
        <span className="brand-visual__corner">↗</span>
      </div>
      <svg className="brand-visual__art" viewBox="0 0 480 300" fill="none">
        <g className="bv-sketch">
          <rect x="24" y="22" width="172" height="232" rx="8" />
          <rect x="42" y="40" width="136" height="72" rx="4" />
          <path d="M42 40l136 72M178 40 42 112" />
          <path d="M42 136q9-7 18 0t18 0 18 0 18 0 18 0" />
          <path d="M42 156q9-7 18 0t18 0 18 0 18 0 18 0 18 0" />
          <path d="M42 176q9-7 18 0t18 0 18 0" />
          <rect x="42" y="210" width="74" height="26" rx="13" />
        </g>
        <g className="bv-arrow">
          <path d="M206 150c14-26 38-30 58-10" />
          <path d="m255 128 10 13-16 3" />
        </g>
        <g className="bv-card">
          <rect className="bv-card__shadow" x="290" y="30" width="172" height="232" rx="12" />
          <rect className="bv-card__body" x="282" y="22" width="172" height="232" rx="12" />
          <rect className="bv-card__media" x="298" y="38" width="140" height="74" rx="6" />
          <circle className="bv-card__sun" cx="414" cy="62" r="10" />
          <path className="bv-card__hill" d="M298 112v-14l34-26 26 20 22-14 58 34z" />
          <rect className="bv-card__title" x="298" y="128" width="104" height="11" rx="5.5" />
          <rect className="bv-card__line" x="298" y="150" width="134" height="7" rx="3.5" />
          <rect className="bv-card__line" x="298" y="164" width="118" height="7" rx="3.5" />
          <rect className="bv-card__line" x="298" y="178" width="84" height="7" rx="3.5" />
          <rect className="bv-card__button" x="298" y="212" width="80" height="26" rx="13" />
        </g>
      </svg>
      <div className="brand-visual__row brand-visual__row--bottom">
        <span>LOGIC MEETS<br />A LITTLE CURIOSITY.</span>
        <span className="brand-visual__signature">a/d.</span>
      </div>
    </div>
  );
}
