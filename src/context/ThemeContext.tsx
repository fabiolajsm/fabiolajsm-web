import { createContext, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store";
import { setTheme } from "../store/uiSlice";

export type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const dispatch = useDispatch();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: () => dispatch(setTheme()),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
}
