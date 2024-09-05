import { Button } from "@nextui-org/react";

type BigButtonsProps = {
  id: number;
};

export const BigButtons = ({ id }: BigButtonsProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <Button className="w-full" color="primary">
        Download
      </Button>
      <Button className="w-full" color="danger">
        Delete
      </Button>
    </div>
  );
};
