import { useContext } from "react";

import { SmallModalContext } from "@ct";
import { Wrapper } from "../wrapper";

export const Loading = () => {
  const { loadingProgress } = useContext(SmallModalContext);

  return (
    <Wrapper>
      <p className="text-sm font-medium text-heading-c1-light  dark:text-heading-c1-dark relative z-10">
        ⚙️ File loading - {loadingProgress}%
      </p>
      <div
        className={`w-full h-full absolute left-[-100%] top-0 bg-success-c1 transition-all rounded-xl`}
        style={{ left: `-${100 - loadingProgress}%` }}
      ></div>
    </Wrapper>
  );
};
