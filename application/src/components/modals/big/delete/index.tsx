import { useContext } from "react";

import { BigModalContext } from "@ct";
import { useServerAction } from "@hk";
import { deleteData } from "@at";

import { Wrapper } from "../wrapper";
import { Title } from "../title";
import { Button } from "@ui";

export const Delete = () => {
  const { file } = useContext(BigModalContext);

  const deleteHandler = useServerAction<number>(deleteData, "Deleting data");

  return (
    <Wrapper>
      <div className="max-w-[520px] w-full p-6 bg-card-bg-c1-light dark:bg-card-bg-c1-dark flex flex-col gap-7 rounded-xl">
        <Title title="Delete" />
        <p className="text-base text-heading-c1-light dark:text-heading-c1-dark">
          Are you sure you want to delete {file?.name}?
          {file?.type.name === "folder" ||
            (file?.type.name === "serial" &&
              "All nested files will be deleted.")}
        </p>
        <Button
          className="w-full"
          color="danger"
          onClick={() => deleteHandler(file?.id)}
        >
          Yes, I{"'"}m sure
        </Button>
      </div>
    </Wrapper>
  );
};
