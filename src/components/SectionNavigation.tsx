import { useSelector } from "react-redux";
import { useI18n } from "../i18n/I18nContext";
import { RootState } from "../store";
import {
  Brain,
  BriefcaseBusiness,
  CodeXml,
  LucideIcon,
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

type Section = {
  icon: LucideIcon;
  label: SectionLabel;
  target: string;
};

export default function SectionNavigation() {
  const { getText } = useI18n();
  const theme = useSelector((state: RootState) => state.ui.theme);

  const sections: Section[] = [
    { icon: UserRound, label: "navbar_about", target: "about" },
    { icon: Brain, label: "navbar_skills", target: "skills" },
    { icon: BriefcaseBusiness, label: "navbar_experience", target: "experience" },
    { icon: CodeXml, label: "navbar_projects", target: "projects" },
    { icon: Mail, label: "navbar_contact", target: "contact" },
  ];

  return (
    <nav id="sectionNavigation" className="sectionNavigation">
      {sections.map(({ icon: Icon, label, target }) => (
        <div key={label} className={`sectionNavigation_item ${theme}`}>
          <button
            className="sectionNavigation_button"
            onClick={() => scrollToSection(target)}
          >
            <Icon size={20} />
          </button>
          <span className="sectionNavigation_label">{getText(label)}</span>
        </div>
      ))}
    </nav>
  );
  function scrollToSection(id: string) {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }
}