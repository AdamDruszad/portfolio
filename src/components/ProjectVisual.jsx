// Non-interactive editorial illustrations; the FitAI figure labels its sample data.
export default function ProjectVisual({ kind }) {
  if (kind === "fitai") return (
    <div className="project-visual project-visual--fitai" aria-hidden="true">
      <div className="fitai-wordmark">FitAI<span>✳</span></div>
      <div className="fitai-window">
        <div className="preview-toolbar"><span><i /><i /><i /></span><span>FitAI / Your plan</span><span>↗</span></div>
        <div className="fitai-interface">
          <div className="fitai-sidebar"><b>FitAI<span>.</span></b><span className="is-selected">▦ &nbsp; Your plan</span><span>↗ &nbsp; Workout log</span><span>◌ &nbsp; AI coach</span><small>YOUR NEXT REP<br />STARTS HERE.</small></div>
          <div className="fitai-dashboard"><p className="preview-eyebrow">LET'S GET MOVING</p><h4>Your plan<span>↗</span></h4>
            <div className="workout-preview"><span>Today's workout</span><strong>Upper body</strong><small>Strength & conditioning · 5 exercises</small><div>Start your workout <span>→</span></div></div>
            <p className="preview-week-title">This week's plan</p>
            <div className="preview-workout-row"><span className="workout-day">MON</span><b>Upper body</b><span>↗</span></div>
            <div className="preview-workout-row"><span className="workout-day">WED</span><b>Lower body</b><span>↗</span></div>
            <div className="preview-workout-row"><span className="workout-day">FRI</span><b>Full body</b><span>↗</span></div>
          </div>
        </div>
      </div>
      <span className="visual-caption">INTERFACE PREVIEW · SAMPLE WORKOUT</span>
    </div>
  );
  if (kind === "tts") return (
    <div className="project-visual project-visual--tts" aria-hidden="true">
      <div className="soundwave">{[20, 32, 54, 80, 48, 110, 146, 88, 120, 66, 156, 102, 54, 130, 80, 48, 26, 42, 18].map((height, index) => <span key={index} style={{ "--bar-height": `${height}px` }} />)}</div>
      <div className="tts-title">A voice for<br /><em>every word.</em></div>
      <div className="tts-preview"><span className="tts-play">▶</span><span>Text to Speech<span>Powered by the Web Speech API</span></span><span className="tts-duration">Aa → ♪</span></div>
      <span className="visual-caption">BROWSER AUDIO / JAVASCRIPT</span>
    </div>
  );
  return (
    <div className="project-visual project-visual--extensions" aria-hidden="true">
      <div className="extensions-window">
        <div className="extension-preview-header"><b><span>❖</span> Extensions</b><span>☼</span></div>
        <div className="extension-preview-filter"><strong>Extensions list</strong><span>All <i>Active</i></span></div>
        <div className="extension-preview-grid">{[
          ["⌘", "DevLens", "Inspect page layouts", "mint"],
          ["⌗", "StyleSpy", "Explore CSS styles", "blue"],
          ["ϟ", "SpeedBoost", "Optimize browsing", "pink"],
          ["{}", "JSONWizard", "Format API responses", "pink"],
        ].map(([icon, name, description, color], i) => <div className="extension-preview-item" key={name}><span className={`extension-tile extension-tile--${color}`}>{icon}</span><div><b>{name}</b><p>{description}</p></div><small>Remove</small><span className={`preview-toggle${i === 2 ? " is-off" : ""}`} /></div>)}</div>
      </div>
      <span className="visual-caption">RESPONSIVE UI / FRONTEND MENTOR</span>
    </div>
  );
}

