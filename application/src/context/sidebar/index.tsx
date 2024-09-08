"use client";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import { createContext, useState } from "react";

type SidebarContextType = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

type SidebarProviderProps = {
  children: ReactNode;
};

export const SidebarContext = createContext({} as SidebarContextType);

export const SidebarProvider = ({ children }: SidebarProviderProps) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <SidebarContext.Provider
      value={{
        isActive,
        setIsActive,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
