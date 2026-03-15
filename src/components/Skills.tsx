import { motion } from "framer-motion";
import { useI18n } from "../i18n/I18nContext";
import "./Skills.css";

export type Skill = {
  name: string;
  icon: React.ReactNode;
};

type SkillsProps = {
  title: string;
  skills: Skill[];
  duration?: number;
  direction?: "left" | "right";
  variant?: "carousel" | "grid";
  translate?: boolean;
};

export default function Skills({
  title,
  skills,
  duration = 25,
  direction = "right",
  variant = "carousel",
  translate = true,
}: SkillsProps) {
  const { getText } = useI18n();
  const scrollSkills = [...skills, ...skills];
  const animation =
    direction === "left"
      ? ["0%", "-50%"]
      : ["-50%", "0%"];

  return (
    <section className="skills">
      <div className="skills-header">
        <h4>{title}</h4>
      </div>

      {variant === "carousel" ? (
        <div className="skills-scroll">
          <motion.div
            className="skills-track"
            animate={{ x: animation }}
            transition={{
              ease: "linear",
              duration,
              repeat: Infinity,
            }}
          >
            {scrollSkills.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="skill-item">
                {skill.icon}
                <span>
                  {translate
                    ? getText(skill.name as Parameters<typeof getText>[0])
                    : skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      ) : (
        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              {skill.icon}
              <span>
                {translate
                  ? getText(skill.name as Parameters<typeof getText>[0])
                  : skill.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}