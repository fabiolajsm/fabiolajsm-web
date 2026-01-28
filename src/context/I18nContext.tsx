import { createContext, useContext, useState } from "react";
import { translations, Language, TranslationKey } from "../i18n";

type I18nContextType = {
  lang: Language;
  getText: (key: TranslationKey) => string;
  setLanguage: (lang: Language) => void;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  return (
    <I18nContext.Provider value={{ lang, getText, setLanguage: setLang }}>
      {children}
    </I18nContext.Provider>
  );

  function getText(key: TranslationKey) {
    return translations[lang][key] ?? key;
  }
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
}
