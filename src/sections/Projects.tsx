import { useI18n } from "../i18n/I18nContext";
import { PROJECTS } from "../constants";
import Window from "../components/Window";
import "./Projects.css";

export default function Projects() {
  const { getText } = useI18n();

  return (
    <Window title={getText("navbar_projects")} color="#f7e1d7" colorDark="#5a3e36">
      <div className="projects-container">
        {PROJECTS.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <div className={`project-preview ${project.previewClass}`} />

            <h3>{getText(`project_${project.id}_title`)}</h3>

            <p className="project-description">
              {getText(`project_${project.id}_description`)}
            </p>
          </a>
        ))}
      </div>
    </Window>
  );
}