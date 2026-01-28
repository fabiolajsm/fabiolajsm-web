import { Outlet } from "react-router-dom";
import Buttons from "../components/Buttons";
import Header from "./Header";
import "../styles/Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <aside className="sidebar">
        <Buttons />
      </aside>

      <main className="content">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}
