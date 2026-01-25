import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ flex: 1, padding: "2rem" }}>
      <Outlet />
    </div>
  );
}
