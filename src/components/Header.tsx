import { useI18n } from "../context/I18nContext";
import { LANGUAGES } from "../i18n";
import "../styles/Header.css";

export default function Header() {
  const { lang, setLanguage } = useI18n();

  return (
    <header className="header">
      <div className="header-right">
        <select
          id="language-select"
          value={lang}
          onChange={(e) => setLanguage(e.target.value as typeof lang)}
          className="language-select"
        >
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>

        {/* Dark mode toggle (solo visual por ahora, despues le mando el toggle bien) */}
        <button id="theme-toggle" className="theme-toggle" aria-label="Toggle theme">
          🌙
        </button>
      </div>
    </header>
  );
}
