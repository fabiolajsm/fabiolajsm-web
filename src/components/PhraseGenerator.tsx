import { useState } from "react";
import { RefreshCw } from "lucide-react";
import "./PhraseGenerator.css";

const phrases = [
    "Esta página fue hecha con mucho amor y café ☕",
    "Transformando ideas en código ✨",
    "Resolviendo problemas, un bug a la vez 🐛",
    "El código limpio es poesía en movimiento 🎨",
    "Aprendiendo algo nuevo cada día 🚀",
    "Menos reuniones, más código 👨‍💻",
    "CTRL+S salva vidas 💾",
    "Si funciona, no lo toques... a menos que haya que refactorizar 🛠️"
];

export default function PhraseGenerator() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <div className="phrase-container">
            <button
                id="phrase-button"
                className="phrase-button"
                onClick={generateNewPhrase}
            >
                <RefreshCw size={20} />
            </button>

            <div className="phrase-text-wrapper">
                <p className={`phrase-text ${isAnimating ? "animate-out" : "animate-in"}`}>
                    {phrases[currentIndex]}
                </p>
            </div>
        </div>
    );
    function generateNewPhrase() {
        if (phrases.length === 0) return;

        setIsAnimating(true);

        setTimeout(() => {
            const nextIndex = Math.floor(Math.random() * phrases.length);
            setCurrentIndex(nextIndex);
            setIsAnimating(false);
        }, 300);
    }
}