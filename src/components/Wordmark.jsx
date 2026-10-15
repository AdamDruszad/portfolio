import { Link } from "react-router-dom";

export default function Wordmark({ onClick }) {
  return (
    <Link to="/" onClick={onClick} aria-label="Adam Biró home" className="wordmark">
      a<span className="wordmark-slash">/</span>d<span className="wordmark-dot">.</span>
    </Link>
  );
}
