import type { Theme } from "../contexts/ThemeContext";

import "./pop-over-menu.css";

type PopOverMenuType = {
  theme: Theme;
  children: React.ReactNode;
};

function PopOverMenu({ theme, children }: PopOverMenuType) {
  return (
    <menu
      className={`absolute top-14 left-331 flex w-50 justify-center border p-2 ${theme === "white" ? "border-black bg-white" : "border-white bg-black"}`}
      popover="auto"
      id="menu"
    >
      {children}
    </menu>
  );
}

export default PopOverMenu;
