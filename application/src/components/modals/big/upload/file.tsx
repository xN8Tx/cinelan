import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { UploadData } from "@tp";

import { FileInput } from "@ui";
import { Input } from "@nextui-org/react";
import { SelectFolder } from "../../../base";

type FileProps = {
  uploadData: UploadData;
  setUploadData: Dispatch<SetStateAction<UploadData>>;
};

export const File = ({ uploadData, setUploadData }: FileProps) => {
  const changeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUploadData((d) => ({
      ...d,
      file: e.target.files![0],
    }));
  };

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUploadData((d) => ({
      ...d,
      name: e.target.value,
    }));
  };

  return (
    <>
      <Input
        placeholder="Name"
        variant="bordered"
        className="w-full dark:text-heading-c1-dark text-heading-c1-light"
        size="lg"
        value={uploadData.name}
        onChange={changeNameHandler}
      />
      <SelectFolder name="fileId" data={uploadData} setData={setUploadData} />
      <FileInput file={uploadData.file} onChange={changeFileHandler} />
    </>
  );
};
