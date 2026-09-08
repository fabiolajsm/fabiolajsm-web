# Portfolio — Fabiola Suárez

My personal portfolio, built from scratch with React and TypeScript. No AI-assisted code: just documentation, trial and error, and dusting off the fundamentals.

**🔗 Live site:** https://fabiolajsm-web.vercel.app/

<!-- Screenshot: full page, light mode, desktop -->
<img width="1907" height="980" alt="image" src="https://github.com/user-attachments/assets/83588d64-e45e-4c09-9e97-5f6f5fabd4d1" />


<!-- Screenshot: full page, dark mode, desktop -->
<img width="1902" height="969" alt="image" src="https://github.com/user-attachments/assets/b6e40d9f-b439-42dd-bb72-a9b33bce7209" />


## About this project

I wanted to build something simple that felt like *me*: colorful, a little playful, with small personal touches. It was also a way to step back from AI tools for a bit and reconnect with the basics — reading docs, thinking through UI states, and building everything by hand.

## Features

- 🌗 **Light / dark mode** — toggle in the header, colors tuned separately for each theme (not just inverted)
- 🌍 **Multi-language support (i18n)** — switch languages from the header, all content is translated through a custom `I18nContext`
- 🧠 **About section** — desktop shows a mind-map layout with animated arrows; mobile shows an accordion where multiple sections can stay open at once
- 🔄 **Flip cards** — used for experience/studies, click to reveal more detail on the back
- 💬 **Phrase generator** — a footer widget that cycles through quotes that resonate with me
- 🚧 **Projects section** — showcases my work, with clear "coming soon" states for projects still in progress
- 📱 **Fully responsive** — tested across mobile, tablet, and desktop

<img width="590" height="1280" alt="image" src="https://github.com/user-attachments/assets/94da90db-799c-4593-9c31-53905e3c8265" />


## Tech stack

- **React** + **TypeScript**
- **Redux** (Redux Toolkit) — for theme and language state
- **CSS** — custom styles, no UI framework, animations hand-written
- **lucide-react** — icons
- Deployed on **Vercel**

## Getting started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

Run the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The page reloads automatically as you edit files.

Build for production:

```bash
npm run build
```

## Project structure

```
src/
├── assets/          # Images, icons
├── components/       # Reusable components (Window, FlipCard, ThemeToggle...)
├── i18n/             # Translation context and language files
├── sections/         # Page sections (About, Projects, Experience...)
├── store/            # Redux slices (theme, language)
└── constants/        # Static data (projects, phrases...)
```

## Contact

Currently open to new opportunities. Feel free to reach out!

- LinkedIn: https://www.linkedin.com/in/fabiolajsm/
- Email: suarezfabiola17@gmail.com
- GitHub: https://github.com/fabiolajsm
