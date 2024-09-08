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
      {routes.map((item) => (
        <Navlink key={item.href} href={item.href} icon={item.icon}>
          {item.name}
        </Navlink>
      ))}
    </div>
  );
};
