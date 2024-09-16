"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

export const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="w-12 h-12 py-3 px-5 dark:bg-card-bg-c1-dark bg-card-bg-c1-light rounded-xl flex items-center justify-center gap-2 relative flex-col"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <LuSun className="w-6 h-6 text-heading-c1-light dark:text-heading-c1-dark" />
      ) : (
        <FaRegMoon className="w-6 h-6 text-heading-c1-light dark:text-heading-c1-dark" />
      )}
    </button>
  );
};
