import { NavLink } from "react-router-dom";

export default function Buttons() {
    return (
        <div style={{ width: "180px" }}>
            <NavLink
                to="/"
                end
                className={({ isActive }) => (isActive ? "active" : "")}
            >
                Home
            </NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
    );
}
