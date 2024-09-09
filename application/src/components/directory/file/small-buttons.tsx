"use client";
import { BigModalContext } from "@ct";
import { Button } from "@nextui-org/react";
import { useContext } from "react";

type SmallButtons = {
  id: number;
};

export const SmallButtons = ({ id }: SmallButtons) => {
  const { openInfoModal } = useContext(BigModalContext);

  return (
    <div className="w-full flex gap-2 justify-between">
      <Button
        variant="light"
        color="primary"
        size="md"
        className="w-[calc(33%-8px)]"
      >
        Edit
      </Button>
      <Button
        variant="light"
        color="primary"
        size="md"
        className="w-[calc(33%-8px)]"
      >
        Move
      </Button>
      <Button
        variant="light"
        color="primary"
        size="md"
        className="w-[calc(33%-8px)]"
        onClick={() => openInfoModal(id)}
      >
        Info
      </Button>
    </div>
  );
};
