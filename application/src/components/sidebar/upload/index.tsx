"use client";
import { Button } from "@nextui-org/react";
import { FiUpload } from "react-icons/fi";

export const Upload = () => {
  const clickHandler = () => {
    console.log("Hello world!");
  };

  return (
    <Button color="primary" size="lg" onClick={clickHandler} className="w-full">
      <FiUpload />
      Upload
    </Button>
  );
};
