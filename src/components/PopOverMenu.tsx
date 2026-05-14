import "./pop-over-menu.css";

type PopOverMenuType = {
  children: React.ReactNode;
};

function PopOverMenu({ children }: PopOverMenuType) {
  return (
    <menu className="absolute left-340 top-14 border w-40 p-2" popover="auto" id="menu">
      {children}
    </menu>
  );
}

export default PopOverMenu;
