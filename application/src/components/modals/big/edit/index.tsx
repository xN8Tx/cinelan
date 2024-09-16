import type { ChangeEvent } from "react";
import type { EditData } from "@tp";

import { useContext, useState } from "react";
import { Input } from "@nextui-org/react";

import { editData as editDataAction } from "@at";
import { useServerAction } from "@hk";
import { BigModalContext } from "@ct";

import { SelectFolder } from "../../../base";
import { Wrapper } from "../wrapper";
import { Title } from "../title";
import { Button } from "@ui";

export const Edit = () => {
  const { file } = useContext(BigModalContext);

  const [editData, setEditData] = useState<EditData>({
    name: file?.name || "",
    fileId: file?.file_id?.toString() || "0",
  });

  const changeNameHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEditData((d) => ({
      ...d,
      name: event?.target.value,
    }));
  };

  const actionHandler = useServerAction<FormData>(
    editDataAction,
    "Editing data",
  );

  return (
    <Wrapper>
      <div className="max-w-[520px] w-full p-6 bg-card-bg-c1-light dark:bg-card-bg-c1-dark flex flex-col gap-7 rounded-xl">
        <Title title="Edit" />
        <form className="w-full" action={actionHandler}>
          <input type="hidden" name="id" value={file?.id} />
          <Input
            name="name"
            onChange={changeNameHandler}
            value={editData.name}
          />
          <SelectFolder name="fileId" data={editData} setData={setEditData} />
          <Button type="submit" color="primary" className="w-full">
            Edit
          </Button>
        </form>
      </div>
    </Wrapper>
  );
};
