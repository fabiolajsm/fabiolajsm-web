import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setLanguage, setTheme } from "../store/uiSlice";
import { LANGUAGES } from "../i18n";
import { useState } from "react";
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
        
        {/* Language Button */}
        <div className="language-wrapper">
          <button
            id="language-toggle"
            onClick={() => setIsOpen(!isOpen)}
          >
            🌐
          </button>

          {isOpen && (
            <div className="language-dropdown">
              {LANGUAGES.map(({ code, label }) => (
                <div
                  key={code}
                  className={`language-option ${
                    lang === code ? "active" : ""
                  }`}
                  onClick={() => handleLanguageChange(code)}
                >
                  {label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          id="theme-toggle"
          onClick={() => dispatch(setTheme())}
        >
          {theme === "light" ? "☀️" : "🌙"}
        </button>

      </div>
    </header>
  );
}