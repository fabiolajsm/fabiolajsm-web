import { createContext, useContext } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { translations, TranslationKey } from "../i18n";

type I18nContextType = {
  getText: (key: TranslationKey) => string;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const lang = useSelector((state: RootState) => state.ui.language);

  return (
    <I18nContext.Provider value={{ getText }}>
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
