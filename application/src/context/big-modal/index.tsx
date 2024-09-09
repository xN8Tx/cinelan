"use client";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import { createContext, useState } from "react";

type BigModalType = "upload" | "info" | null;

type BigModalContextType = {
  bigModalType: BigModalType;
  setBigModalType: Dispatch<SetStateAction<BigModalType>>;
  openInfoModal: (fileId: number) => void;
  fileId: number;
};

type BigModalProviderProps = {
  children: ReactNode;
};

export const BigModalContext = createContext({} as BigModalContextType);

export const BigModalProvider = ({ children }: BigModalProviderProps) => {
  const [bigModalType, setBigModalType] = useState<BigModalType>(null);
  const [fileId, setFileId] = useState<number>(0);

  const openInfoModal = (fileId: number) => {
    setFileId(fileId);
    setBigModalType("info");
  };

  return (
    <BigModalContext.Provider
      value={{
        bigModalType,
        openInfoModal,
        setBigModalType,
        fileId,
      }}
    >
      {children}
    </BigModalContext.Provider>
  );
};
