import { useContext } from "react";

import { SmallModalContext } from "@ct";
import { Wrapper } from "../wrapper";

export const Error = () => {
  const { smallModalMessage } = useContext(SmallModalContext);

  return (
    <Wrapper color="error">
      <p className="text-sm font-medium text-heading-c1-light  dark:text-heading-c1-dark relative z-10">
        🚫 {smallModalMessage}
      </p>
    </Wrapper>
  );
};
