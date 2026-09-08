import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { useSelector } from "react-redux";

import { useI18n } from "../i18n/I18nContext";
import { RootState } from "../store";
import { PHRASES } from "../constants";
import "./PhraseGenerator.css";

export default function PhraseGenerator() {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const { getText } = useI18n();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  return (
    <footer className={`phrase-container ${theme}`}>
      <button className="phrase-button" onClick={generateNewPhrase}>
        <RefreshCw size={20} />
        <span className="phrase-tooltip">{getText("phrase_tooltip")}</span>
      </button>

      <div className="phrase-text-wrapper">
        <p
          className={`phrase-text ${isAnimating ? "animate-out" : "animate-in"}`}
        >
          {getText(PHRASES[currentIndex] as Parameters<typeof getText>[0])}
        </p>
      </div>
    </footer>
  );
  function generateNewPhrase() {
    if (PHRASES.length === 0) return;

    setIsAnimating(true);

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % PHRASES.length);
      setIsAnimating(false);
    }, 300);
  }
}
