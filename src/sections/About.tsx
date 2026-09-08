import { useState } from "react";
import Window from "../components/Window";
import { useI18n } from "../i18n/I18nContext";
import { useSelector } from "react-redux";
import avatar from "../assets/avatar.png";

import { RootState } from "../store";
import "./About.css";

const ABOUT_KEYS_LEFT = ["about_1", "about_3"] as const;
const ABOUT_KEYS_RIGHT = ["about_2", "about_4"] as const;
const ABOUT_ITEMS = ["about_1", "about_2", "about_3", "about_4"] as const;
const ABOUT_LETTERS = ["F", "A", "B", "I"] as const;

export default function About() {
  const { getText } = useI18n();
  const theme = useSelector((state: RootState) => state.ui.theme);
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const darkText = theme === "dark" ? "dark-text" : "";

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <Window title="About me/" color="#e8f7f2" showHeaderButtons={false}>
      {/* DESKTOP - MAPA MENTAL */}
      <section className="about-symmetric desktop-only">
        <div className="about-side left">
          {ABOUT_KEYS_LEFT.map((key) => (
            <div className="row" key={key}>
              <div className={`text-block ${darkText}`}>
                <h4>{getText(`${key}_title`)}</h4>
                <p>{getText(key)}</p>
              </div>

              <svg className="arrow" viewBox="0 0 120 60">
                <path d="M110 30 Q 60 10 20 30" />
                <path d="M30 20 L20 30 L30 40" />
              </svg>
            </div>
          ))}
        </div>

        <div className="about-center">
          <div className="avatar">
            <img src={avatar} alt="Fabi Avatar" />
          </div>
        </div>

        <div className="about-side right">
          {ABOUT_KEYS_RIGHT.map((key) => (
            <div className="row" key={key}>
              <svg className="arrow" viewBox="0 0 120 60">
                <path d="M10 30 Q 60 10 100 30" />
                <path d="M90 20 L100 30 L90 40" />
              </svg>

              <div className={`text-block ${darkText}`}>
                <h4>{getText(`${key}_title`)}</h4>
                <p>{getText(key)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MOBILE - ACORDEÓN */}
      <section className="about-mobile mobile-only">
        <div className="avatar mobile-avatar">
          <img src={avatar} alt="Fabi Avatar" />
        </div>

        <div className="about-accordion">
          {ABOUT_ITEMS.map((key, index) => {
            const isOpen = openIndexes.has(index);

            return (
              <div
                className={`about-accordion-item ${darkText} ${isOpen ? "open" : ""}`}
                key={key}
              >
                <button
                  type="button"
                  className="about-accordion-header"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                >
                  <span className="about-letter">{ABOUT_LETTERS[index]}</span>
                  <span className="about-accordion-icon">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                <div className="about-accordion-content">
                  <div className="about-accordion-inner">
                    <h4>{getText(`${key}_title`)}</h4>
                    <p>{getText(key)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Window>
  );
}
