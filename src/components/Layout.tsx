import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import Buttons from "../components/Buttons";
import Header from "./Header";
import "../styles/Layout.css";

export default function Layout() {
  const theme = useSelector((state: RootState) => state.ui.theme);

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
