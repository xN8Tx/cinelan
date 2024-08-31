"use client";
import type { ReactNode } from "react";

import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";

type NavLinkProps = {
  href: string;
  children: ReactNode;
  icon: ReactNode;
};

export const Navlink = ({ href, children, icon }: NavLinkProps) => {
  const params = useParams();
  const path = usePathname();

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (href === path) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [params, path]);

  return (
    <Link
      href={href}
      className={`w-full flex gap-4 p-3 items-center rounded-[10px] text-lg transition-all ${isActive ? "text-heading-c1-light dark:text-heading-c1-dark dark:bg-card-promo-elements-c1-dark bg-card-promo-elements-c1-light" : "text-heading-c2-light dark:text-heading-c2-dark bg-transparent"} dark:hover:bg-card-promo-elements-c1-dark hover:bg-card-promo-elements-c1-light`}
      data-isactive={`${isActive}`}
    >
      {icon}
      {children}
    </Link>
  );
};
