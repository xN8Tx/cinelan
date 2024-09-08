"use client";
import { usePathname } from "next/navigation";

import { SmallWrapper } from "../small-wrapper";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Paths } from "@tp";
import { BurgerButton } from "../burger-button";

export const FileRoute = () => {
  const [isHomePage, setIsHomePage] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [paths, setPaths] = useState<Paths[]>([]);
  const path = usePathname();

  const getPaths = async () => {
    setIsLoading(true);
    const lastPath = path.split("/").pop();
    const response = await fetch(`/api/get-path/${lastPath}`);

    const data = (await response.json())!.message;

    setIsHomePage(data[0] === "Files");
    setPaths(data);
    setIsLoading(false);
  };

  useEffect(() => {
    switch (path) {
      case "/":
        setPaths([{ name: "Files", slug: "/" }]);
        setIsLoading(false);
        break;
      /*
      case "/movies":
        setPaths(["Movies"]);
        break;
      case "/serials":
        setPaths(["Serials"]);
        break;
      */
      default:
        getPaths();
        break;
    }
  }, [path]);

  return (
    <div className="h-12 flex items-center gap-4">
      <BurgerButton />
      <SmallWrapper>
        {isLoading && (
          <p className="dark:text-heading-c1-dark text-heading-c1-light text-base font-bold flex items-center gap-2">
            <span className="animate-ping inline-flex w-3 h-3 rounded-full bg-primary-c2"></span>
            Loading
          </p>
        )}
        {paths.length > 0 &&
          paths.map((route, index) => (
            <Link
              href={!isHomePage ? `/${route.slug}` : "/"}
              key={`${route.slug}-${index}`}
              className="flex gap-2 items-center dark:text-heading-c1-dark text-heading-c1-light text-base font-bold transition-all hover:text-form-placeh-c1-light dark:hover:text-form-placeh-c1-dark"
            >
              {index !== 0 && <MdNavigateNext />}
              {route.name}
            </Link>
          ))}
      </SmallWrapper>
    </div>
  );
};
