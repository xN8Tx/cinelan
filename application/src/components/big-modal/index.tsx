"use client";
import { useContext } from "react";

import { Upload } from "./upload";
import { BigModalContext } from "@ct";

export const BigModal = () => {
  const { bigModalType } = useContext(BigModalContext);

  return <>{bigModalType === "upload" && <Upload />}</>;
};
