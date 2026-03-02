import { useI18n } from "../i18n/I18nContext";
import "./SectionNavigation.css";
import { BriefcaseBusiness, CodeXml, Mail, UserRound } from "lucide-react";

export default function SectionNavigation() {
  const { getText } = useI18n();

  return (
    <nav id="sectionNavigation" className="sectionNavigation">
      <div className="sectionNavigation_item">
        <button className="sectionNavigation_button">
          <UserRound size={20} />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_about")}
        </span>
      </div>

      <div className="sectionNavigation_item">
        <button className="sectionNavigation_button">
          <BriefcaseBusiness size={20} />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_experience")}
        </span>
      </div>

      <div className="sectionNavigation_item">
        <button className="sectionNavigation_button">
          <CodeXml size={20} />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_projects")}
        </span>
      </div>

      <div className="sectionNavigation_item">
        <button className="sectionNavigation_button">
          <Mail size={20} />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_contact")}
        </span>
      </div>
    </nav>
  );
}