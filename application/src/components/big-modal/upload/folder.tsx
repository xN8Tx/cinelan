import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { UploadData } from "@tp";

import { Input } from "@nextui-org/react";
import { SelectFolder } from "../../select-folder";

type FolderProps = {
  uploadData: UploadData;
  setUploadData: Dispatch<SetStateAction<UploadData>>;
};

export const Folder = ({ uploadData, setUploadData }: FolderProps) => {
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
      <SelectFolder data={uploadData} setData={setUploadData} />
    </>
  );
};
