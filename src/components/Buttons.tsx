import { useI18n } from "../i18n/I18nContext";
import { NavLink } from "react-router-dom";
import aboutIcon from "../assets/icons/about.png";
import experienceIcon from "../assets/icons/experience.png";
import projectsIcon from "../assets/icons/projects.png";
import contactIcon from "../assets/icons/contact.png";
import "../styles/Buttons.css";

export default function Buttons() {
  const { getText } = useI18n();

  return (
    <nav className="buttons">
      <NavLink to="/about" className="button">
        <img src={aboutIcon} alt="About me" />
        <span>{getText("sidebar_about")}</span>
      </NavLink>

      <NavLink to="/experience" className="button">
        <img src={experienceIcon} alt="Experience" />
        <span>{getText("sidebar_experience")}</span>
      </NavLink>

      <NavLink to="/projects" className="button">
        <img src={projectsIcon} alt="Projects" />
        <span>{getText("sidebar_projects")}</span>
      </NavLink>

      <NavLink to="/contact" className="button">
        <img src={contactIcon} alt="Contact" />
        <span>{getText("sidebar_contact")}  </span>
      </NavLink>
    </nav>
  );
}
