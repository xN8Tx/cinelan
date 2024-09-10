"use client";
import { Navigation } from "./navigation";
import { Search } from "./search";
import { Upload } from "./upload";
import { Logo } from "./logo";
import { useContext } from "react";
import { SidebarContext } from "@ct";

export const Sidebar = () => {
  const { isActive } = useContext(SidebarContext);

  return (
    <aside
      className="md:static md:w-72 w-full data-[isactive=true]:translate-x-0 translate-x-[-100%] md:translate-x-0 z-30 fixed h-full dark:bg-card-bg-c1-dark bg-card-bg-c1-light py-5 px-8 flex flex-col justify-between transition-all"
      id="sidebar"
      data-isactive={isActive.toString()}
    >
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
