import { BookOpen, Briefcase, Award } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { useSelector } from "react-redux";
import { RootState } from "../store";

import { JOBS_DATA, STUDIES_DATA } from "../constants";
import FlipCard from "../components/FlipCard";

import "./Experience.css";

type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  desc: string;
};

export default function Experience() {
  const { getText } = useI18n();
  const theme = useSelector((state: RootState) => state.ui.theme);

  const studiesColorsLight = ["#f7e1d7", "#e9edc9", "#bde0fe"];
  const jobsColorsLight = ["#bde0fe", "#f7e1d7", "#e9edc9"];

  const studiesColorsDark = ["#5a3e36", "#4f5536", "#304e6b"];
  const jobsColorsDark = ["#304e6b", "#5a3e36", "#4f5536"];

  const studiesColors =
    theme === "dark" ? studiesColorsDark : studiesColorsLight;

  const jobsColors =
    theme === "dark" ? jobsColorsDark : jobsColorsLight;

  return (
    <div className="experience-grid">
      <div className="experience-column">
        <div className="experience-header">
          <BookOpen />
          <h4>{getText("experience_studies")}</h4>
        </div>
        <div className="experience-cards">
          {renderCards(STUDIES_DATA, <Award size={30} />, studiesColors)}
        </div>
      </div>
      <hr />
      <div className="experience-column">
        <div className="experience-header">
          <Briefcase />
          <h4>{getText("experience_jobs")}</h4>
        </div>
        <div className="experience-cards">
          {renderCards(JOBS_DATA, <Briefcase size={30} />, jobsColors)}
        </div>
      </div>
    </div>
  );
  function renderCards(
    data: ExperienceItem[],
    icon: React.ReactNode,
    colors: string[]
  ) {
    return data.map((item, index) => (
      <FlipCard
        key={index}
        title={item.title}
        company={item.company}
        period={item.period}
        backContent={item.desc}
        icon={icon}
        color={colors[index]}
      />
    ));
  }
}