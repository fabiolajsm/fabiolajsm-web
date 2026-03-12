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
