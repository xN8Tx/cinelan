import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { UploadData } from "@tp";

import { FileInput } from "@ui";
import { Input } from "@nextui-org/react";

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
        className="w-full"
        size="lg"
        value={uploadData.name}
        onChange={changeNameHandler}
      />
      <FileInput file={uploadData.file} onChange={changeFileHandler} />
    </>
  );
};
