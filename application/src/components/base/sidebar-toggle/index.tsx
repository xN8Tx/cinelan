"use client";
import { useContext } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";

import { SidebarContext } from "@ct";

export const SidebarToggle = () => {
  const { isActive, setIsActive } = useContext(SidebarContext);

  const openSidebarHandler = () => {
    setIsActive((d) => !d);
  };

  return (
    <button
      className="md:hidden w-12 h-12 py-3 px-5 dark:bg-card-bg-c1-dark bg-card-bg-c1-light rounded-xl flex items-center justify-center gap-2 relative flex-col"
      onClick={openSidebarHandler}
    >
      {isActive ? (
        <HiX className="w-6 h-6 dark:text-heading-c1-dark text-heading-c1-light" />
      ) : (
        <HiMenuAlt4 className="w-6 h-6 dark:text-heading-c1-dark text-heading-c1-light" />
      )}
    </button>
  );
};
