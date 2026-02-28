import { ReactNode } from "react";
import "./Window.css";

type WindowProps = {
  title: string;
  color?: string;
  children: ReactNode;
};

export default function Window({
  title,
  color = "#EADFC8",
  children,
}: WindowProps) {
  return (
    <div id="window-card">
      <div
        id="window-header"
        style={{ backgroundColor: color }}
      >
        <div id="window-buttons">
          <span />
          <span />
          <span />
        </div>

        <h3 id="window-title">{title}</h3>
      </div>

      <div id="window-content">
        {children}
      </div>
    </div>
  );
}