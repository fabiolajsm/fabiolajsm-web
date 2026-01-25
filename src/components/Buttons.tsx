import { NavLink } from "react-router-dom";
import aboutIcon from "../assets/icons/about.png";
import experienceIcon from "../assets/icons/experience.png";
import projectsIcon from "../assets/icons/projects.png";
import contactIcon from "../assets/icons/contact.png";
import "../styles/Buttons.css";

export default function Buttons() {
  return (
    <nav className="buttons">
      <NavLink to="/about" className="button">
        <img src={aboutIcon} alt="About me" />
        <span>About Me</span>
      </NavLink>

      <NavLink to="/experience" className="button">
        <img src={experienceIcon} alt="Experience" />
        <span>Experience</span>
      </NavLink>

      <NavLink to="/projects" className="button">
        <img src={projectsIcon} alt="Projects" />
        <span>My Projects</span>
      </NavLink>

      <NavLink to="/contact" className="button">
        <img src={contactIcon} alt="Contact" />
        <span>Contact Me</span>
      </NavLink>
    </nav>
  );
}
