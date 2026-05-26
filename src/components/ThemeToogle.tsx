import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Moon, SunMedium } from "lucide-react";
import { RootState } from "../store";
import { setTheme } from "../store/uiSlice";
import { useRef } from "react";

export function ThemeToggle() {
  const ref = useRef<HTMLButtonElement>(null);

  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.ui.theme);

  const toogleTheme = () => {
    const document: any = window.document;
    if(!ref.current || !document.startViewTransition) return dispatch(setTheme());

    const { left, width, top, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;

    const right = window.innerWidth - width;
    const bottom = window.innerHeight - height;

    const radius = Math.hypot(Math.max(x, right), Math.max(y, bottom));

    const transition = document.startViewTransition?.(
        () => dispatch(setTheme())
    );

    transition.ready.then(() => {
    document.documentElement.animate(
      [
        { clipPath: `circle(0px at ${x}px ${y}px)` },
        { clipPath: `circle(${radius}px at ${x}px ${y}px)` }
      ],
      {
        duration: 500,
        easing: 'ease-out',
        pseudoElement: '::view-transition-new(root)'
      }
    );
  });
  };

  return (
    <button
      id="theme-toggle"
      className="header-button"
      onClick={toogleTheme}
      ref={ref}
    >
      {theme === "light" ? <SunMedium size={20} /> : <Moon size={20} />}
    </button>
  );
}
