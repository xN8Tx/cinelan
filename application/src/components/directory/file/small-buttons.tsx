import { Button } from "@nextui-org/react";

type SmallButtons = {
  id: number;
};

export const SmallButtons = ({ id }: SmallButtons) => {
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
        Refresh
      </Button>
      <Button
        variant="light"
        color="primary"
        size="md"
        className="w-[calc(33%-8px)]"
      >
        Info
      </Button>
    </div>
  );
};
