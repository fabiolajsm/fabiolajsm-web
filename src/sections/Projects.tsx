import { useI18n } from "../i18n/I18nContext";
import { PROJECTS } from "../constants";
import Window from "../components/Window";
import "./Projects.css";

export default function Projects() {
  const { getText } = useI18n();

  return (
    <Window
      title={getText("navbar_projects")}
      color="#f7e1d7"
      colorDark="#262626"
    >
      <div className="projects-container">
        {PROJECTS.map((project) => {
          const cardContent = (
            <>
              <div className={`project-preview ${project.previewClass}`} />

              {!project.link && (
                <span className="project-badge">
                  {getText("project_coming_soon")}
                </span>
              )}

              <h3>{getText(`project_${project.id}_title`)}</h3>

              <p className="project-description">
                {getText(`project_${project.id}_description`)}
              </p>
            </>
          );

          if (!project.link) {
            return (
              <div
                key={project.id}
                className="project-card project-card-disabled"
              >
                {cardContent}
              </div>
            );
          }

          return (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </Window>
  );
}
