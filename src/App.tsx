import { useSelector } from "react-redux";
import { RootState } from "./store";
import { useI18n } from "./i18n/I18nContext";

import Header from "./components/Header";
import SectionNavigation from "./components/SectionNavigation";

import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

import "./index.css";

export default function App() {
  const theme = useSelector((state: RootState) => state.ui.theme);
  const { getText } = useI18n();

  return (
    <div className={`layout ${theme}`}>
      <Header />
      <SectionNavigation />

      <main className="content">
        <section id="greeting">
          <h1>{getText("title")}</h1>
          <h2>{getText("subtitle")}</h2>
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </main>

    </div>
  );
}