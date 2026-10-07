export default function Arrow({ direction = "up-right", className = "" }) {
  return (
    <svg className={`arrow arrow--${direction} ${className}`} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 19 19 5M5 5h14v14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

