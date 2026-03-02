import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { RootState } from "../store";
import { Globe, Moon, SunMedium } from "lucide-react";

import { setLanguage, setTheme } from "../store/uiSlice";
import { LANGUAGES } from "../i18n";

import "./Header.css";

export default function Header() {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.ui.language);
  const theme = useSelector((state: RootState) => state.ui.theme);

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (code: typeof lang) => {
    dispatch(setLanguage(code));
    setIsOpen(false);
  };

  return (
    <header id="header">
      <div id="header-right">
        <div className="language-wrapper">
          <button
            id="language-toggle"
            className="header-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Globe size={20} />
          </button>

          {isOpen && (
            <div className="language-dropdown">
              {LANGUAGES.map(({ code, label }) => (
                <div
                  key={code}
                  className={`language-option ${lang === code ? "active" : ""
                    }`}
                  onClick={() => handleLanguageChange(code)}
                >
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          id="theme-toggle"
          className="header-button"
          onClick={() => dispatch(setTheme())}
        >
          {theme === "light" ? <SunMedium size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}