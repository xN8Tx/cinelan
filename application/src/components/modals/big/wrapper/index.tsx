import type { ReactNode } from "react";

type ModalWrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: ModalWrapperProps) => {
  return (
    <div className="absolute z-50 top-0 left-0 w-full h-screen bg-black/10 dark:bg-white/10 flex items-center justify-center ">
      {children}
    </div>
  );
};
