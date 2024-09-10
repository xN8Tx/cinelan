"use client";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import type { FileData } from "@tp";

import { createContext, useState } from "react";

type BigModalType = "upload" | "info" | "edit" | "delete" | null;

type BigModalContextType = {
  file: FileData | null;
  bigModalType: BigModalType;
  openInfoModal: (file: FileData) => void;
  openEditModal: (file: FileData) => void;
  openDeleteModal: (file: FileData) => void;
  setBigModalType: Dispatch<SetStateAction<BigModalType>>;
};

type BigModalProviderProps = {
  children: ReactNode;
};

export const BigModalContext = createContext({} as BigModalContextType);

export const BigModalProvider = ({ children }: BigModalProviderProps) => {
  const [bigModalType, setBigModalType] = useState<BigModalType>(null);
  const [file, setFile] = useState<FileData | null>(null);

  const openDeleteModal = (file: FileData) => {
    setFile(file);
    setBigModalType("delete");
  };
  const openEditModal = (file: FileData) => {
    setFile(file);
    setBigModalType("edit");
  };
  const openInfoModal = (file: FileData) => {
    setFile(file);
    setBigModalType("info");
  };

  return (
    <BigModalContext.Provider
      value={{
        file,
        openDeleteModal,
        bigModalType,
        openInfoModal,
        setBigModalType,
        openEditModal,
      }}
    >
      {children}
    </BigModalContext.Provider>
  );
};
