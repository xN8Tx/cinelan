"use client";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { Loading, UploadData } from "@tp";

import { useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";

type Data = {
  fileId: string;
  [x: string]: unknown;
};

type SelectorFolder = {
  parentId?: string;
  label: string;
  key: string;
};

type SelectFolderProps = {
  data: Data;
  setData: Dispatch<SetStateAction<UploadData>>;
};

export const SelectFolder = ({ data, setData }: SelectFolderProps) => {
  const [loading, setLoading] = useState<Loading>("idle");
  const [selectFolders, setSelectFolders] = useState<SelectorFolder[]>([]);

  const getFoldersHandler = async (fileId: string) => {
    setLoading("loading");
    const response = await fetch(`/api/get-folder/${fileId}`);

    if (!response.ok) {
      console.log(await response.text());
      throw new Error("Can not fetch folders data");
    }

    const data = await response.json();
    const folders = data.message as SelectorFolder[];

    setSelectFolders(folders);
    setLoading("success");
  };

  const changeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    if (!selectFolders) return;
    const value = event.target.value as string;

    if (value === "null") {
      const parentId = selectFolders.find(
        (f) => f.key === data.fileId,
      )!.parentId;

      return setData((d) => ({
        ...d,
        fileId: parentId!,
      }));
    }

    return setData((d) => ({
      ...d,
      fileId: value,
    }));
  };

  useEffect(() => {
    getFoldersHandler(data.fileId);
  }, [data.fileId]);

  return (
    <div className="w-full">
      <Select
        variant="bordered"
        placeholder="Select folder"
        selectedKeys={[data.fileId]}
        className="w-full text-black dark:text-white"
        size="lg"
        isDisabled={loading !== "success"}
        onChange={changeSelectHandler}
      >
        {selectFolders.map((type) => (
          <SelectItem key={type.key} className="text-black dark:text-white">
            {type.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
