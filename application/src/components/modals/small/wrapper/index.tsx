import type { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
  color?: "success" | "error" | "primary" | "default";
};

export const Wrapper = ({ children, color = "default" }: WrapperProps) => {
  let colorClass = "dark:bg-card-bg-c1-dark bg-card-bg-c1-light";

  if (color === "success") {
    colorClass = "bg-success-c1";
  } else if (color === "error") {
    colorClass = "bg-danger-c1";
  } else if (color === "primary") {
    colorClass = "bg-primary-c1";
  }

  return (
    <div
      className={`relative w-full h-12  rounded-xl flex items-center justify-center overflow-hidden ${colorClass}`}
    >
      {children}
    </div>
  );
};
