import Link from "next/link";

export const Logo = () => {
  return (
    <div className="w-full flex gap-2 py-b-3 items-center">
      <svg
        width="34"
        height="21"
        viewBox="0 0 34 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="9.91667" cy="10.5" rx="9.91667" ry="10" fill="#4361EE" />
        <ellipse
          cx="28.3332"
          cy="10.4999"
          rx="5.66667"
          ry="5.71429"
          fill="#899DFC"
        />
      </svg>
      <Link
        href="/"
        className="text-2xl dark:text-heading-c1-dark text-heading-c1-light"
      >
        CineLAN
      </Link>
    </div>
  );
};
