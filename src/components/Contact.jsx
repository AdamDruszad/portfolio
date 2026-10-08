import { Link } from "react-router-dom";
import Arrow from "./Arrow";

export default function Contact() {
  return (
    <footer id="contact" tabIndex={-1} className="contact-section" aria-labelledby="contact-title"><div className="page-shell">
      <div className="contact-top"><p className="eyebrow"><span className="section-index">03 /</span> Have something in mind?</p><p className="availability"><span className="status-dot" />Let's make it happen</p></div>
      <div className="contact-heading"><h2 id="contact-title">Good things start<br />with a <em>conversation.</em></h2><a href="mailto:adambiro2008@gmail.com" className="contact-arrow" aria-label="Email Adam to start a conversation"><Arrow /></a></div>
      <div className="contact-details"><a href="mailto:adambiro2008@gmail.com" className="contact-email">adambiro2008@gmail.com <Arrow /></a><p>Have an opportunity, an idea, or just want to say hi?<br />I'd love to hear from you.</p></div>
      <div className="footer-bottom"><Link className="wordmark" to="/" aria-label="Adam Biró home">a<span>/</span>d<span className="wordmark-dot">.</span></Link><p>© {new Date().getFullYear()} Ádám Biró<span>Built with care. And React.</span></p><div className="social-links"><a href="https://github.com/AdamDruszad" target="_blank" rel="noopener noreferrer">GitHub <Arrow /></a><a href="https://www.linkedin.com/in/%C3%A1d%C3%A1m-bir%C3%B3-75437b402/" target="_blank" rel="noopener noreferrer">LinkedIn <Arrow /></a></div><Link to="#main-content" className="back-to-top">Back to top <Arrow direction="up" /></Link></div>
    </div></footer>
  );
}

