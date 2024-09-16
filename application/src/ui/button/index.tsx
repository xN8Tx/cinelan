"use client";
import type { ButtonProps as NextButtonProps } from "@nextui-org/react";

import { Button as NextButton } from "@nextui-org/react";
import { useContext } from "react";

import { SmallModalContext } from "@ct";

export const Button = (props: NextButtonProps) => {
  const { smallModalType } = useContext(SmallModalContext);

  return (
    <NextButton isDisabled={smallModalType === "loading"} {...props}>
      {props.children}
    </NextButton>
  );
};
