import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../context/ThemeContext";
import { RootState } from "../store";
import { setLanguage } from "../store/uiSlice";
import { LANGUAGES } from "../i18n";
import "../styles/Header.css";

export default function Header() {
  const dispatch = useDispatch();
  const lang = useSelector((state: RootState) => state.ui.language);
  const { theme, setTheme } = useTheme();

  return (
    <header className="header">
      <div className="header-right">
        <select
          id="language-select"
          value={lang}
          onChange={(e) =>
            dispatch(setLanguage(e.target.value as typeof lang))
          }
          className="language-select"
        >
          {LANGUAGES.map(({ code, label }) => (
            <option key={code} value={code}>
              {label}
            </option>
          ))}
        </select>

        {/* Later I'll add styles and animations */}
        <button
          id="theme-toggle"
          className="theme-toggle" onClick={setTheme}>
          {theme === "light" ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}
