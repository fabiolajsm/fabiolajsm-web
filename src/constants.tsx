import {
  Atom,
  MessageCircle,
  Users,
  Lightbulb,
  RefreshCw,
  Clock,
  Heart,
  Brain,
  Target,
  Code,
  Database,
  Globe,
  Braces,
  Server,
  Smartphone,
  Layers,
} from "lucide-react";
import { Skill } from "./components/Skills";
import { TranslationKey } from "./i18n";

type Project = {
  id: "ecommerce" | "budget" | "invitationCreator";
  link: string;
  previewClass: string;
};

export const PROJECTS: Project[] = [
  {
    id: "ecommerce",
    link: "https://github.com/tuusuario/ecommerce",
    previewClass: "ecommerce",
  },
  {
    id: "budget",
    link: "https://github.com/tuusuario/budget-manager",
    previewClass: "budget",
  },
  {
    id: "invitationCreator",
    link: "https://github.com/tuusuario/invitationCreator-v1",
    previewClass: "invitationCreator",
  },
];

type ExperienceItem = {
  title: TranslationKey;
  company: TranslationKey;
  period: TranslationKey;
  desc: TranslationKey;
};

export const JOBS_DATA: ExperienceItem[] = [
  {
    title: "experience_1_title",
    company: "experience_1_company",
    period: "experience_1_date",
    desc: "experience_1_description",
  },
  {
    title: "experience_2_title",
    company: "experience_2_company",
    period: "experience_2_date",
    desc: "experience_2_description",
  },
  {
    title: "experience_3_title",
    company: "experience_3_company",
    period: "experience_3_date",
    desc: "experience_3_description",
  },
  {
    title: "experience_4_title",
    company: "experience_4_company",
    period: "experience_4_date",
    desc: "experience_4_description",
  },
  {
    title: "experience_5_title",
    company: "experience_5_company",
    period: "experience_5_date",
    desc: "experience_5_description",
  },
  {
    title: "experience_6_title",
    company: "experience_6_company",
    period: "experience_6_date",
    desc: "experience_6_description",
  },
];

export const STUDIES_DATA: ExperienceItem[] = [
  {
    title: "study_1_title",
    company: "study_1_company",
    period: "study_1_period",
    desc: "study_1_desc",
  },
  {
    title: "study_2_title",
    company: "study_2_company",
    period: "study_2_period",
    desc: "study_2_desc",
  },
  {
    title: "study_3_title",
    company: "study_3_company",
    period: "study_3_period",
    desc: "study_3_desc",
  },
];

export const SOFT_SKILLS: Skill[] = [
  { name: "skills_communication", icon: <MessageCircle size={32} /> },
  { name: "skills_teamwork", icon: <Users size={32} /> },
  { name: "skills_problem_solving", icon: <Lightbulb size={32} /> },
  { name: "skills_adaptability", icon: <RefreshCw size={32} /> },
  { name: "skills_time_management", icon: <Clock size={32} /> },
  { name: "skills_empathy", icon: <Heart size={32} /> },
  { name: "skills_critical_thinking", icon: <Brain size={32} /> },
  { name: "skills_leadership", icon: <Target size={32} /> },
];

export const TECH_SKILLS: Skill[] = [
  { name: "React", icon: <Atom size={32} /> },
  { name: "Redux", icon: <Layers size={32} /> },
  { name: "JavaScript", icon: <Braces size={32} /> },
  { name: "TypeScript", icon: <Braces size={32} /> },
  { name: "HTML", icon: <Globe size={32} /> },
  { name: "CSS", icon: <Globe size={32} /> },
  { name: "SASS", icon: <Globe size={32} /> },
  { name: "SQL", icon: <Database size={32} /> },
  { name: "Java", icon: <Server size={32} /> },
  { name: "Postman", icon: <Server size={32} /> },
  { name: "Android Studio", icon: <Smartphone size={32} /> },
  { name: "Angular", icon: <Layers size={32} /> },
  { name: "PHP", icon: <Server size={32} /> },
  { name: "C", icon: <Code size={32} /> },
];

export const EMAIL = "suarezfabiola17@gmail.com";

export const PHRASES = [
  "phrase_01",
  "phrase_02",
  "phrase_03",
  "phrase_04",
  "phrase_05",
  "phrase_06",
  "phrase_07",
  "phrase_08",
  "phrase_09",
  "phrase_10",
];
