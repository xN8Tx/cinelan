import { Navlink } from "@ui";

// import { FaTv } from "react-icons/fa6";
import { CiServer } from "react-icons/ci";
import { /*RiMovie2Line,*/ RiSettings3Line } from "react-icons/ri";

const routes = [
  { href: "/", name: "Files", icon: <CiServer /> },
  // { href: "/serials", name: "Serials", icon: <FaTv /> },
  // { href: "/movies", name: "Movies", icon: <RiMovie2Line /> },
  { href: "/settings", name: "Settings", icon: <RiSettings3Line /> },
];

export const Navigation = () => {
  return (
    <div className="flex flex-col gap-3">
      <p className="flex gap-1 items-center text-xs font-light dark:text-p-text-c1-dark text-p-text-c1-light">
        <span className="flex-grow flex-shrink h-[1px] dark:bg-p-text-c1-dark bg-p-text-c1-light opacity-50 rounded-sm"></span>
        Navigation
        <span className="flex-grow flex-shrink h-[1px] dark:bg-p-text-c1-dark bg-p-text-c1-light opacity-50 rounded-sm"></span>
      </p>
      {routes.map((item) => (
        <Navlink key={item.href} href={item.href} icon={item.icon}>
          {item.name}
        </Navlink>
      ))}
    </div>
  );
};
