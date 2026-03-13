import { BookOpen, Briefcase, Award, ChevronLeft, ChevronRight } from "lucide-react";
import { useI18n } from "../i18n/I18nContext";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useState } from "react";

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

  const [studiesIndex, setStudiesIndex] = useState(0);
  const [jobsIndex, setJobsIndex] = useState(0);

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
      {/* STUDIES */}
      <div className="experience-column">
        <div className="experience-header">
          <BookOpen />
          <h4>{getText("experience_studies")}</h4>
        </div>

        <div className="experience-cards">
          {renderCards(
            STUDIES_DATA.slice(studiesIndex, studiesIndex + 3),
            <Award size={30} />,
            studiesColors,
            studiesIndex
          )}
        </div>

        <div className="carousel-controls">
          <button
            onClick={() => handlePrev(setStudiesIndex)}
            disabled={studiesIndex === 0}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => handleNext(setStudiesIndex, STUDIES_DATA.length)}
            disabled={studiesIndex + 3 >= STUDIES_DATA.length}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <hr />

      {/* JOBS */}
      <div className="experience-column">
        <div className="experience-header">
          <Briefcase />
          <h4>{getText("experience_jobs")}</h4>
        </div>

        <div className="experience-cards">
          {renderCards(
            JOBS_DATA.slice(jobsIndex, jobsIndex + 3),
            <Briefcase size={30} />,
            jobsColors,
            jobsIndex
          )}
        </div>

        <div className="carousel-controls">
          <button
            onClick={() => handlePrev(setJobsIndex)}
            disabled={jobsIndex === 0}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => handleNext(setJobsIndex, JOBS_DATA.length)}
            disabled={jobsIndex + 3 >= JOBS_DATA.length}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
  function renderCards(
    data: ExperienceItem[],
    icon: React.ReactNode,
    colors: string[],
    startIndex: number
  ) {
    return data.map((item, index) => {
      const realIndex = startIndex + index;

      return (
        <FlipCard
          key={realIndex}
          title={item.title}
          company={item.company}
          period={item.period}
          backContent={item.desc}
          icon={icon}
          color={colors[realIndex % colors.length]}
        />
      );
    });
  }

  function handlePrev(
    setIndex: React.Dispatch<React.SetStateAction<number>>
  ) {
    setIndex((prev) => Math.max(prev - 3, 0));
  }

  function handleNext(
    setIndex: React.Dispatch<React.SetStateAction<number>>,
    length: number
  ) {
    setIndex((prev) => {
      const next = prev + 3;
      return next >= length ? prev : next;
    });
  }
}