import es from "./es.json";
import en from "./en.json";

export const translations = {
  es,
  en,
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof es;

export const LANGUAGES: {
  code: Language;
  label: string;
}[] = [
  { code: "es", label: "Español" },
  { code: "en", label: "English" },
];
