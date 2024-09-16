import type { ReactNode } from "react";

type CardProps = {
  size: "lg" | "sm";
  height: "lg" | "sm";
  children: ReactNode;
};

export const Card = ({ size, height = "lg", children }: CardProps) => {
  return (
    <div
      className={`${size === "sm" && "lg:w-[calc(50%-10px)]"} w-full ${height === "lg" ? "h-full" : "h-[calc(50%-10px)]"} min-h-[240px] py-5 px-5 dark:bg-card-bg-c1-dark bg-card-bg-c1-light rounded-3xl overflow-y-hidden flex gap-5 flex-col`}
    >
      {children}
    </div>
  );
};
