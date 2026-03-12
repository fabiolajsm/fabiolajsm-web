import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import "./Window.css";

type WindowProps = {
  title: string;
  color?: string;
  colorDark?: string;
  children: ReactNode;
};

export default function Window({
  title,
  color = "#EADFC8",
  colorDark = "#3A3A3A",
  children,
}: WindowProps) {
  const theme = useSelector((state: RootState) => state.ui.theme);

  const headerColor = theme === "dark" ? colorDark : color;

  return (
    <div id="window-card">
      <div
        id="window-header"
        style={{ backgroundColor: headerColor }}
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