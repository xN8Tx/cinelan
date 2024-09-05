"use client";
import { useRouter, usePathname } from "next/navigation";
import { IoClose } from "react-icons/io5";

type TitleProps = {
  name: string;
};

export const Title = ({ name }: TitleProps) => {
  const path = usePathname();
  const router = useRouter();

  console.log(path);

  const closeHandler = () => {
    router.back();
  };

  return (
    <div className="w-full flex justify-between gap-5 items-center">
      <h1 className="text-2xl font-bold dark:text-heading-c1-dark text-heading-c1-light">
        {name}
      </h1>
      <button onClick={closeHandler} className="group bg-transparent p-2">
        <IoClose className="w-6 h-6 transition-all group-hover:scale-110 group-hover:dark:text-heading-c2-dark group-hover::text-heading-c2-light dark:text-heading-c1-dark text-heading-c1-light" />
      </button>
    </div>
  );
};
