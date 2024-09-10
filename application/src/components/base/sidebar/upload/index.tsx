"use client";
import { Button } from "@nextui-org/react";
import { FiUpload } from "react-icons/fi";
import { useContext } from "react";

import { BigModalContext } from "@ct";

export const Upload = () => {
  const { setBigModalType } = useContext(BigModalContext);

  const clickHandler = () => {
    setBigModalType("upload");
  };

  return (
    <Button color="primary" size="lg" onClick={clickHandler} className="w-full">
      <FiUpload />
      Upload
    </Button>
  );
};
