import { SidebarToggle } from "../sidebar-toggle";
import { ThemeChanger } from "./theme-changer";
import { Navigation } from "./navigation";

export const Header = () => {
  return (
    <div className="h-12 flex items-center gap-4">
      <SidebarToggle />
      <Navigation />
      <ThemeChanger />
    </div>
  );
};
