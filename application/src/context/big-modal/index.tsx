"use client";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import { createContext, useState } from "react";

type BigModalType = "upload" | "info" | null;

type BigModalContextType = {
  bigModalType: BigModalType;
  setBigModalType: Dispatch<SetStateAction<BigModalType>>;
};

type BigModalProviderProps = {
  children: ReactNode;
};

export const BigModalContext = createContext({} as BigModalContextType);

export const BigModalProvider = ({ children }: BigModalProviderProps) => {
  const [bigModalType, setBigModalType] = useState<BigModalType>(null);

  return (
    <BigModalContext.Provider
      value={{
        bigModalType,
        setBigModalType,
      }}
    >
      {children}
    </BigModalContext.Provider>
  );
};
