import { useContext } from "react";
import { BigModalContext } from "@ct";

import { IoClose } from "react-icons/io5";

type TitleProps = {
  title: string;
};

export const Title = ({ title }: TitleProps) => {
  const { setBigModalType } = useContext(BigModalContext);

  const closeHandler = () => {
    setBigModalType(null);
  };

  return (
    <div className="w-full flex justify-between items-center">
      <h3 className="text-2xl font-bold dark:text-heading-c1-dark text-heading-c1-light">
        {title}
      </h3>
      <button onClick={closeHandler} className="group bg-transparent p-2">
        <IoClose className="w-6 h-6 transition-all group-hover:scale-110 group-hover:dark:text-heading-c2-dark group-hover::text-heading-c2-light dark:text-heading-c1-dark text-heading-c1-light" />
      </button>
    </div>
  );
};
