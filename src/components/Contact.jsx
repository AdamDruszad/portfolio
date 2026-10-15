import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { email, mailto, socialLinks } from "../data/profile";
import Arrow from "./Arrow";
import Wordmark from "./Wordmark";
import { ExternalLink, Note, Status } from "./ui";

// mailto: does nothing for visitors without a mail client, so the address can be copied too.
function CopyEmail() {
  const [state, setState] = useState("idle");
  const timer = useRef();
  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2400);
  }

  const messages = { idle: "", copied: "Email address copied", failed: "Copying failed. Select the address instead." };
  return (
    <>
      <button type="button" className="copy-button" onClick={copy}>
        {state === "copied" ? "Copied" : "Copy"}
      </button>
      <span className="visually-hidden" role="status">{messages[state]}</span>
      {state === "failed" && <span className="copy-error" aria-hidden="true">{messages.failed}</span>}
    </>
  );
}

export default function Contact() {
  const { pathname } = useLocation();
  // The section number only makes sense on the home page, after 01 and 02.
  const index = pathname === "/" ? "03" : undefined;

  return (
    <footer id="contact" tabIndex={-1} className="contact" aria-labelledby="contact-title">
      <div className="shell">
        <div className="contact-top">
          <Note index={index}>Have something in mind?</Note>
          <Status>Let's make it happen</Status>
        </div>

        <div className="contact-heading">
          <h2 id="contact-title">Good things start<br />with a <em>conversation.</em></h2>
          <a href={mailto} className="contact-arrow" aria-label="Email Adam to start a conversation"><Arrow /></a>
        </div>

        <div className="contact-details">
          <div className="contact-email-row">
            <a href={mailto} className="contact-email">{email} <Arrow /></a>
            <CopyEmail />
          </div>
          <p>Have an opportunity, an idea, or just want to say hi?<br />I'd love to hear from you.</p>
        </div>

        <div className="footer-bottom">
          <Wordmark />
          <p className="footer-credit">© {new Date().getFullYear()} Ádám Biró<span>Built with care. And React.</span></p>
          <div className="social-links">
            {socialLinks.map(({ label, href }) => <ExternalLink key={label} href={href} className="">{label}</ExternalLink>)}
          </div>
          <Link to="#main-content" className="back-to-top">Back to top <Arrow direction="up" /></Link>
        </div>
      </div>
    </footer>
  );
}
