import { useI18n } from "../i18n/I18nContext";
import aboutIcon from "../assets/icons/about.png";
import experienceIcon from "../assets/icons/experience.png";
import projectsIcon from "../assets/icons/projects.png";
import contactIcon from "../assets/icons/contact.png";
import "./SectionNavigation.css";

export default function SectionNavigation() {
  const { getText } = useI18n();

  return (
    <nav id="sectionNavigation" className="sectionNavigation">
      <div className="sectionNavigation_item">
        <button className="sectionNavigation_button">
          <img src={aboutIcon} alt="About" />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_about")}
        </span>
      </div>

      <div className="sectionNavigation_item">
        <button className="sectionNavigation_button">
          <img src={experienceIcon} alt="Experience" />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_experience")}
        </span>
      </div>

      <div className="sectionNavigation_item">
        <button className="sectionNavigation_button">
          <img src={projectsIcon} alt="Projects" />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_projects")}
        </span>
      </div>

      <div className="sectionNavigation_item">
        <button className="sectionNavigation_button">
          <img src={contactIcon} alt="Contact" />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_contact")}
        </span>
      </div>
    </nav>
  );
}