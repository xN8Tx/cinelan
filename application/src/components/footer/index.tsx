import Link from "next/link";
import { SmallWrapper } from "../small-wrapper";

export const Footer = () => {
  const linkClassName =
    "underline transition-all text-sm text-heading-c1-light hover:text-form-placeh-c1-light dark:text-heading-c1-dark dark:hover:text-form-placeh-c1-dark";

  return (
    <SmallWrapper justyfy="between">
      <div className="flex gap-5">
        <Link className={linkClassName} href={"/"}>
          DockerHub
        </Link>
        <Link href={"/"} className={linkClassName}>
          GitHub
        </Link>
      </div>
      <div>
        <Link
          className="text-sm text-heading-c2-light dark:text-heading-c2-dark"
          href="https://shteyn-web.ru"
        >
          Created by <span className={linkClassName}>Shteyn.</span>
        </Link>
      </div>
    </SmallWrapper>
  );
};
