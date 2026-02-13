import { Outlet } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Buttons from "../components/Buttons";
import Header from "./Header";
import "../styles/Layout.css";

export default function Layout() {
  const { theme } = useTheme();

  return (
    <div className={`layout ${theme}`}>  
      <Buttons />

      <main className="content">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
