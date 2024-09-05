"use client";
import { usePathname } from "next/navigation";

import { SmallWrapper } from "../small-wrapper";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";

export const FileRoute = () => {
  const [isHomePage, setIsHomePage] = useState<boolean>(false);
  const [paths, setPaths] = useState<string[]>([]);
  const path = usePathname();

  const getPaths = async () => {
    const lastPath = path.split("/").pop();
    const response = await fetch(`/api/get-path/${lastPath}`);

    const data = (await response.json())!.message;

    setIsHomePage(data[0] === "Files");
    setPaths(data);
  };

  useEffect(() => {
    switch (path) {
      case "/":
        setPaths(["Files"]);
        break;
      case "/movies":
        setPaths(["Movies"]);
        break;
      case "/serials":
        setPaths(["Serials"]);
        break;
      default:
        getPaths();
        break;
    }
  }, [path]);

  return (
    <SmallWrapper>
      {paths.length > 0 &&
        paths.map((route, index) => (
          <Link
            href={!isHomePage ? `/${route.toLowerCase()}` : "/"}
            key={`${route}-${index}`}
            className="flex gap-2 items-center dark:text-heading-c1-dark text-heading-c1-light text-base font-bold transition-all hover:text-form-placeh-c1-light dark:hover:text-form-placeh-c1-dark"
          >
            {index !== 0 && <MdNavigateNext />}
            {route}
          </Link>
        ))}
    </SmallWrapper>
  );
};
