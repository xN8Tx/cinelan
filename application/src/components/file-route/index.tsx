"use client";
import { usePathname } from "next/navigation";

import { SmallWrapper } from "../small-wrapper";
import { MdNavigateNext } from "react-icons/md";
import Link from "next/link";

export const FileRoute = () => {
  const path = usePathname();

  const splitPath = path.split("/").filter((i) => i !== "") || [];
  const isHomePage = splitPath[0] !== "serials" && splitPath[0] !== "movies";

  const linkClassName =
    "flex gap-2 items-center dark:text-heading-c1-dark text-heading-c1-light text-base font-bold transition-all hover:text-form-placeh-c1-light dark:hover:text-form-placeh-c1-dark";

  const getHref = (index: number) =>
    splitPath.map((p, i) => (i <= index ? p : null)).join("/");

  return (
    <SmallWrapper>
      {isHomePage && (
        <Link href="/" className={linkClassName}>
          Files
          {splitPath.length > 0 && <MdNavigateNext />}
        </Link>
      )}
      {splitPath.map((route, index) => (
        <Link
          href={`/${getHref(index)}`}
          className={linkClassName}
          key={`${route}-${index}`}
        >
          {index !== 0 && <MdNavigateNext />}
          {route}
        </Link>
      ))}
    </SmallWrapper>
  );
};
