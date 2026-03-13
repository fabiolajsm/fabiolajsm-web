import { useState } from "react";
import "./FlipCard.css";

interface FlipCardProps {
    title: string;
    period?: string;
    company?: string;
    backContent: string;
    icon?: React.ReactNode;
    color: string;
}

export default function FlipCard({
    title,
    period,
    company,
    backContent,
    icon,
    color
}: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="flip-card-container"
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>
                {/* Front */}
                <div
                    className="flip-card-front"
                    style={{
                        background: color,
                        border: `1px solid ${color}`
                    }}
                >
                    <div className="flip-card-icon">
                        {icon}
                    </div>

                    <h3 className="flip-card-title">{title}</h3>

                    {company && <p className="flip-card-company">{company}</p>}
                    {period && <p className="flip-card-period">{period}</p>}
                </div>

                {/* Back */}
                <div
                    className="flip-card-back"
                    style={{
                        border: `1px solid ${color}`
                    }}
                >
                    <p className="flip-card-description">{backContent}</p>
                </div>
            </div>
        </div>
    );
}