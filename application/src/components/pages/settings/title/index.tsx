import React from "react";

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="w-full flex">
      <h3 className="text-2xl font-bold dark:text-heading-c1-dark text-heading-c1-light">
        {title}
      </h3>
    </div>
  );
};
