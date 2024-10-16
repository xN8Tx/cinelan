import type { ReactNode } from "react";

type BigWrapperProps = {
  children: ReactNode;
};

export const BigWrapper = ({ children }: BigWrapperProps) => {
  return (
    <section className="w-full h-[calc(100%-8.50rem)] flex flex-wrap justify-between gap-5">
      {children}
    </section>
  );
};
