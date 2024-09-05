"use client";
import type { Dispatch, SetStateAction, ReactNode } from "react";
import { createContext, useEffect, useRef, useState } from "react";

type SmallModalType = "loading" | "error" | "success" | "message" | null;

type ModalContextType = {
  loadingProgress: number;
  smallModalMessage: string;
  smallModalType: SmallModalType;
  setLoadingProgress: Dispatch<SetStateAction<number>>;
  setSmallModalMessage: Dispatch<SetStateAction<string>>;
  setSmallModalType: Dispatch<SetStateAction<SmallModalType>>;
};

type SmallModalProviderProps = {
  children: ReactNode;
};

export const SmallModalContext = createContext({} as ModalContextType);

export const SmallModalProvider = ({ children }: SmallModalProviderProps) => {
  const [smallModalType, setSmallModalType] = useState<SmallModalType>(null);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);
  const [smallModalMessage, setSmallModalMessage] = useState<string>("");

  const timer = useRef<NodeJS.Timeout | null>(null);

  const clearModal = () => {
    setSmallModalType(null);
  };

  useEffect(() => {
    if (smallModalType === "loading") return;

    if (timer.current !== null) {
      clearTimeout(timer.current);
      timer.current = null;
    }

    timer.current = setTimeout(() => clearModal(), 5000);

    return () => clearTimeout(timer.current as NodeJS.Timeout);
  }, [smallModalType]);

  return (
    <SmallModalContext.Provider
      value={{
        loadingProgress,
        setLoadingProgress,
        smallModalType,
        setSmallModalType,
        smallModalMessage,
        setSmallModalMessage,
      }}
    >
      {children}
    </SmallModalContext.Provider>
  );
};
