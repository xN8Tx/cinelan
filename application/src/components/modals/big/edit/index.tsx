import type { ChangeEvent } from "react";
import type { EditData } from "@tp";

import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Input } from "@nextui-org/react";

import { BigModalContext, SmallModalContext } from "@ct";

import { SelectFolder } from "../../../base";
import { Wrapper } from "../wrapper";
import { Title } from "../title";

export const Edit = () => {
  const router = useRouter();

  const { file, setBigModalType } = useContext(BigModalContext);
  const { setSmallModalMessage, setSmallModalType, setLoadingProgress } =
    useContext(SmallModalContext);

  const [loading, setLoading] = useState<boolean>(false);
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

  const uploadDataHandler = async () => {
    setLoading(true);
    setLoadingProgress(100);
    setSmallModalType("loading");
    setSmallModalMessage("Loading edit data");

    const data = new FormData();
    data.set("id", file!.id.toString());
    Object.keys(editData).forEach((key) => {
      data.set(key, editData[key as keyof EditData]!.toString());
    });

    const response = await fetch("/api/edit", {
      method: "PUT",
      body: data,
    });

    if (!response.ok) {
      setSmallModalType("error");
      setSmallModalMessage("Can not edit file. Check info in console");
      console.log(await response.text());
    }

    setLoading(false);
    setBigModalType(null);
    setSmallModalType("success");
    setSmallModalMessage("Successfully edit file data");

    router.push(`/${file?.slug}`);
  };

  return (
    <Wrapper>
      <div className="max-w-[520px] w-full p-6 bg-card-bg-c1-light dark:bg-card-bg-c1-dark flex flex-col gap-7 rounded-xl">
        <Title title="Edit" />
        <Input onChange={changeNameHandler} value={editData.name} />
        <SelectFolder data={editData} setData={setEditData} />
        <Button
          color="primary"
          className="w-full"
          isDisabled={loading}
          onClick={uploadDataHandler}
        >
          Edit
        </Button>
      </div>
    </Wrapper>
  );
};
