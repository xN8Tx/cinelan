"use client";
import type { FileData } from "@tp";
import { Button } from "@nextui-org/react";
import { useContext } from "react";

import { BigModalContext } from "@ct";

type BigButtonsProps = {
  file: FileData;
};

export const BigButtons = ({ file }: BigButtonsProps) => {
  const { openDeleteModal } = useContext(BigModalContext);

  return (
    <div className="w-full flex flex-col gap-2">
      <Button className="w-full" color="primary">
        Download
      </Button>
      <Button
        className="w-full"
        color="danger"
        onClick={() => openDeleteModal(file)}
      >
        Delete
      </Button>
    </div>
  );
};
