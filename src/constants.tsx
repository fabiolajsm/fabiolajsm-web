
import {
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

export const STUDIES_DATA = [
  {
    title: "Licenciatura en Informática",
    company: "Universidad Nacional",
    period: "2019 - 2023",
    desc: "Formación completa en ingeniería de software, algoritmos avanzados y arquitectura de sistemas. Especialización en desarrollo web moderno.",
  },
  {
    title: "Bootcamp Full Stack",
    company: "Tech Academy",
    period: "2019",
    desc: "Intensivo de 12 semanas en MERN stack, implementación de APIs RESTful y buenas prácticas de desarrollo profesional.",
  },
  {
    title: "Certificación React Avanzado",
    company: "Plataforma Online",
    period: "2023",
    desc: "Dominio de patrones avanzados en React, state management y optimización de rendimiento en aplicaciones grandes.",
  },
  {
    title: "Licenciatura en Informática 2",
    company: "Universidad Nacional",
    period: "2019 - 2023",
    desc: "Formación completa en ingeniería de software, algoritmos avanzados y arquitectura de sistemas. Especialización en desarrollo web moderno.",
  },
  {
    title: "Bootcamp Full Stack 2",
    company: "Tech Academy",
    period: "2019",
    desc: "Intensivo de 12 semanas en MERN stack, implementación de APIs RESTful y buenas prácticas de desarrollo profesional.",
  },
  {
    title: "Certificación React Avanzado 2",
    company: "Plataforma Online",
    period: "2023",
    desc: "Dominio de patrones avanzados en React, state management y optimización de rendimiento en aplicaciones grandes.",
  },
];

export const JOBS_DATA = [
  {
    title: "Senior Full Stack Developer",
    company: "Global Tech Solutions",
    period: "2023 - Present",
    desc: "Liderazgo técnico en el desarrollo de plataformas SaaS de alta escala. Implementación de arquitecturas modernas y optimización de flujos de trabajo.",
  },
  {
    title: "Frontend Specialist",
    company: "Creative Design Agency",
    period: "2021 - 2023",
    desc: "Especialización en interfaces interactivas complejas y sistemas de diseño para clientes internacionales. Colaboración con equipos de producto.",
  },
  {
    title: "Full Stack Developer",
    company: "Startup Hub",
    period: "2019 - 2021",
    desc: "Desarrollo ágil de MVPs y productos digitales desde cero. Manejo del stack completo desde base de datos hasta despliegue en producción.",
  },
  {
    title: "Frontend Specialist2",
    company: "Creative Design Agency",
    period: "2021 - 2023",
    desc: "Especialización en interfaces interactivas complejas y sistemas de diseño para clientes internacionales. Colaboración con equipos de producto.",
  },
  {
    title: "Full Stack Developer2",
    company: "Startup Hub",
    period: "2019 - 2021",
    desc: "Desarrollo ágil de MVPs y productos digitales desde cero. Manejo del stack completo desde base de datos hasta despliegue en producción.",
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
  { name: "React", icon: <Code size={32} /> },
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