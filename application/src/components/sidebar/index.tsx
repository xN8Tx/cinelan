import { Navigation } from "./navigation";
import { Search } from "./search";
import { Upload } from "./upload";
import { Logo } from "./logo";

export const Sidebar = () => {
  return (
    <aside className="w-72 h-full dark:bg-card-bg-c1-dark bg-card-bg-c1-light py-5 px-8 flex flex-col justify-between">
      <div className="w-full flex flex-col gap-8">
        <Logo />
        <Search />
        <Navigation />
      </div>
      <div className="w-full">
        <Upload />
      </div>
    </aside>
  );
};
