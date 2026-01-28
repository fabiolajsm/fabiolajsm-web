import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { Language } from "../i18n";
import type { Theme } from "../context/ThemeContext";

type UIState = {
  language: Language;
  theme: Theme;
};

const initialState: UIState = {
  language: "es",
  theme: "light",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLanguage(state, action: PayloadAction<Language>) {
      state.language = action.payload;
    },
    setTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { setLanguage, setTheme } = uiSlice.actions;
export default uiSlice.reducer;
