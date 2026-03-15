import { useState } from "react";
import { useI18n } from "../i18n/I18nContext";

import Window from "../components/Window";
import { Mail, Copy, Check } from "lucide-react";
import { EMAIL } from "../constants";

import "./Contact.css";

export default function Contact() {
  const { getText } = useI18n();
  const [copied, setCopied] = useState(false);

  return (
    <Window
      title={getText("contact_title")}
      color="#fdf4d8"
      colorDark="#4f5536"
    >
      <div className="contact">
        <h2>{getText("contact_subtitle")}</h2>
        <p>{getText("contact_text_1")}</p>

        <div id="contact-email" className="contact-email">
          <button id="copy-icon" className="copy-icon" onClick={handleCopy}>
            {copied ? <Check size={18} /> : <Copy size={18} />}
            {!copied && (
              <span className="copy-tooltip">{getText("copy_tooltip")}</span>
            )}
          </button>

          <span className="email-text">
            <Mail size={18} />
            {EMAIL}
          </span>
        </div>

        <h2 className="contact-link-text">{getText("contact_text_2")}</h2>
        <div id="contact-links" className="contact-links">
          <a
            href="https://linkedin.com/in/fabiolajsm"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button secondary"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/fabiolajsm"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button outline"
          >
            GitHub
          </a>
        </div>
      </div>
    </Window>
  );
  async function handleCopy() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }
}
