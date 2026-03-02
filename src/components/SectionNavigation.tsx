import { useSelector } from "react-redux";
import { useI18n } from "../i18n/I18nContext";
import { RootState } from "../store";
import { BriefcaseBusiness, CodeXml, Mail, UserRound } from "lucide-react";
import "./SectionNavigation.css";

export default function SectionNavigation() {
  const { getText } = useI18n();
  const theme = useSelector((state: RootState) => state.ui.theme);

  return (
    <nav id="sectionNavigation" className="sectionNavigation">
      <div className={`sectionNavigation_item ${theme}`}>
        <button className="sectionNavigation_button">
          <UserRound size={20} />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_about")}
        </span>
      </div>

      <div className={`sectionNavigation_item ${theme}`}>
        <button className="sectionNavigation_button">
          <BriefcaseBusiness size={20} />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_experience")}
        </span>
      </div>

      <div className={`sectionNavigation_item ${theme}`}>
        <button className="sectionNavigation_button">
          <CodeXml size={20} />
        </button>
        <span className="sectionNavigation_label">
          {getText("navbar_projects")}
        </span>
      </div>

      <div className={`sectionNavigation_item ${theme}`}>
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