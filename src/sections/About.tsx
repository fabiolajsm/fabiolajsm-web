import Window from "../components/Window";
import { useI18n } from "../i18n/I18nContext";
import { useSelector } from "react-redux";
import avatar from "../assets/avatar.png";
import { RootState } from "../store";
import "./About.css";

export default function About() {
  const { getText } = useI18n();
  const theme = useSelector((state: RootState) => state.ui.theme);

  const aboutItems = ["about_1", "about_2", "about_3", "about_4"] as const;

  const aboutKeysLeft = ["about_1", "about_3"] as const;
  const aboutKeysRight = ["about_2", "about_4"] as const;

  return (
    <Window title="About me/" color="#e8f7f2" showHeaderButtons={false}>
      <>
        {/* DESKTOP - MAPA MENTAL */}
        <section className="about-symmetric desktop-only">
          {/* LEFT */}
          <div className="about-side left">
            {aboutKeysLeft.map((key) => (
              <div className="row" key={key}>
                <div
                  className={`text-block ${theme === "dark" ? "dark-text" : ""}`}
                >
                  <h4>{getText(`${key}_title`)}</h4>
                  <p>{getText(key)}</p>
                </div>

                <svg className="arrow arrow-left" viewBox="0 0 120 60">
                  <path d="M110 30 Q 60 10 20 30" />
                  <path d="M30 20 L20 30 L30 40" />
                </svg>
              </div>
            ))}
          </div>

          {/* CENTER */}
          <div className="about-center">
            <div className="avatar">
              <img src={avatar} alt="Fabi Avatar" />
            </div>
          </div>

          {/* RIGHT */}
          <div className="about-side right">
            {aboutKeysRight.map((key) => (
              <div className="row" key={key}>
                <svg className="arrow" viewBox="0 0 120 60">
                  <path d="M10 30 Q 60 10 100 30" />
                  <path d="M90 20 L100 30 L90 40" />
                </svg>

                <div
                  className={`text-block ${theme === "dark" ? "dark-text" : ""}`}
                >
                  <h4>{getText(`${key}_title`)}</h4>
                  <p>{getText(key)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MOBILE - LISTA */}
        <section className="about-mobile mobile-only">
          <div className="avatar mobile-avatar">
            <img src={avatar} alt="Fabi Avatar" />
          </div>

          <div>
            {aboutItems.map((key, index) => (
              <div
                className={`about-item ${theme === "dark" ? "dark-text" : ""}`}
                key={key}
              >
                <h4>{getText(`${key}_title`)}</h4>
                <p>{getText(key)}</p>
              </div>
            ))}
          </div>
        </section>
      </>
    </Window>
  );
}
