"use client";
import type { FileData } from "@tp";

import { useContext } from "react";
import { Button } from "@nextui-org/react";

import { BigModalContext } from "@ct";

type SmallButtons = {
  file: FileData;
};

export const SmallButtons = ({ file }: SmallButtons) => {
  const { openInfoModal, openEditModal } = useContext(BigModalContext);

  return (
    <div className="w-full flex gap-2 justify-between">
      <Button
        variant="bordered"
        color="primary"
        size="md"
        className="w-[calc(50%-8px)]"
        onClick={() => openEditModal(file)}
      >
        Edit
      </Button>
      <Button
        variant="bordered"
        color="primary"
        size="md"
        className="w-[calc(50%-8px)]"
        onClick={() => openInfoModal(file)}
      >
        Info
      </Button>
    </div>
  );
};
