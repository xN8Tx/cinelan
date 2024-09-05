"use client";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { UploadData, UploadSelectorValues } from "@tp";

import { Select, SelectItem } from "@nextui-org/react";

type SelectorProps = {
  uploadData: UploadData;
  setUploadData: Dispatch<SetStateAction<UploadData>>;
};

const types = [
  { label: "Movie", key: "movie" },
  { label: "Serial", key: "serial" },
  { label: "File", key: "file" },
  { label: "Folder", key: "folder" },
];

export const Selector = ({ uploadData, setUploadData }: SelectorProps) => {
  const changeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValue = e.target.value as UploadSelectorValues;
    setUploadData((d) => ({ ...d, type: newValue }));
  };

  return (
    <Select
      variant="bordered"
      placeholder="Select type"
      selectedKeys={[uploadData.type]}
      className="w-full text-black dark:text-white"
      size="lg"
      onChange={changeSelectHandler}
    >
      {types.map((type) => (
        <SelectItem key={type.key} className="text-black dark:text-white">
          {type.label}
        </SelectItem>
      ))}
    </Select>
  );
};
