import { useContext } from "react";

import { SmallModalContext } from "@ct";
import { Wrapper } from "../wrapper";

export const Loading = () => {
  const { loadingProgress, smallModalMessage } = useContext(SmallModalContext);

  return (
    <Wrapper>
      <p className="text-sm font-medium text-heading-c1-light  dark:text-heading-c1-dark relative z-10 flex items-center gap-5">
        <span className="animate-ping inline-flex w-3 h-3 rounded-full bg-primary-c2"></span>
        {smallModalMessage}
        {loadingProgress !== 100 && ` - ${loadingProgress}%`}
      </p>
      <div
        className={`w-full h-full absolute left-[-100%] top-0 bg-success-c1 transition-all rounded-xl`}
        style={{ left: `-${100 - loadingProgress}%` }}
      ></div>
    </Wrapper>
  );
};
