import { useSelector } from "react-redux";
import { useI18n } from "../i18n/I18nContext";
import { RootState } from "../store";
import {
  Brain,
  BriefcaseBusiness,
  CodeXml,
  Mail,
  UserRound,
} from "lucide-react";
import "./SectionNavigation.css";

type SectionLabel =
  | "navbar_about"
  | "navbar_skills"
  | "navbar_experience"
  | "navbar_projects"
  | "navbar_contact";

export default function SectionNavigation() {
  const { getText } = useI18n();
  const theme = useSelector((state: RootState) => state.ui.theme);

  const sections: { icon: React.ComponentType<{ size?: number }>; label: SectionLabel }[] = [
    { icon: UserRound, label: "navbar_about" },
    { icon: Brain, label: "navbar_skills" },
    { icon: BriefcaseBusiness, label: "navbar_experience" },
    { icon: CodeXml, label: "navbar_projects" },
    { icon: Mail, label: "navbar_contact" },
  ];

  return (
    <nav id="sectionNavigation" className="sectionNavigation">
      {sections.map(({ icon: Icon, label }) => (
        <div key={label} className={`sectionNavigation_item ${theme}`}>
          <button className="sectionNavigation_button">
            <Icon size={20} />
          </button>
          <span className="sectionNavigation_label">{getText(label)}</span>
        </div>
      ))}
    </nav>
  );
}