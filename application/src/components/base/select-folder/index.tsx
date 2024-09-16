"use client";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { EditData, Loading, UploadData } from "@tp";

import { useContext, useEffect, useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { SmallModalContext } from "@ct";

type SelectorFolder = {
  parentId?: string;
  label: string;
  key: string;
};

type SelectFolderProps = {
  data: UploadData | EditData;
  name: string;
  setData:
    | Dispatch<SetStateAction<UploadData>>
    | Dispatch<SetStateAction<EditData>>;
};

export const SelectFolder = ({ data, setData, name }: SelectFolderProps) => {
  const [loading, setLoading] = useState<Loading>("idle");
  const [selectFolders, setSelectFolders] = useState<SelectorFolder[]>([]);

  const { setSmallModalMessage, setSmallModalType } =
    useContext(SmallModalContext);

  const getFoldersHandler = async (fileId: string | null) => {
    setLoading("loading");
    const response = await fetch(`/api/get-folder/${fileId ?? 0}`);

    if (!response.ok) {
      setSmallModalType("error");
      setSmallModalMessage("Can not fetch folders. Check info in console");
      console.log(await response.text());
      setLoading("error");
      return;
    }

    const data = await response.json();
    const folders = data.message as SelectorFolder[];

    setSelectFolders(folders);
    setLoading("success");
  };

  const changeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;

    if (value === "-1") {
      const parentId = selectFolders.find(
        (f) => f.key === data.fileId?.toString(),
      )?.parentId;
      return (setData as Dispatch<SetStateAction<UploadData>>)((d) => ({
        ...d,
        fileId: parentId ? parentId : null,
      }));
    }

    return (setData as Dispatch<SetStateAction<UploadData>>)((d) => ({
      ...d,
      fileId: value === "null" ? null : value,
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
        selectedKeys={[data.fileId ?? "null"]}
        className="w-full text-black dark:text-white"
        size="lg"
        isDisabled={loading !== "success"}
        onChange={changeSelectHandler}
        name={name}
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
