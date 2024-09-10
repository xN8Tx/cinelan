"use client";
import { useContext } from "react";

import { Info } from "./info";
import { Upload } from "./upload";
import { BigModalContext } from "@ct";
import { Delete } from "./delete";
import { Edit } from "./edit";

export const BigModal = () => {
  const { bigModalType } = useContext(BigModalContext);

  return (
    <>
      {bigModalType === "upload" && <Upload />}
      {bigModalType === "info" && <Info />}
      {bigModalType === "delete" && <Delete />}
      {bigModalType === "edit" && <Edit />}
    </>
  );
};
