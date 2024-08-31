import type { ReactNode } from "react";

type SmallWrapperProps = {
  children: ReactNode;
  justyfy?: "center" | "between" | "start";
};

export const SmallWrapper = ({
  children,
  justyfy = "start",
}: SmallWrapperProps) => {
  const className =
    "w-full py-3 px-5 dark:bg-card-bg-c1-dark bg-card-bg-c1-light rounded-xl flex items-center gap-2 justify-" +
    justyfy;

  return <section className={className}>{children}</section>;
};
