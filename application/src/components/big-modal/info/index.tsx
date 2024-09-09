"use client";
import type { FileInfoDB, Loading } from "@tp";
import { useContext, useEffect, useState } from "react";

import { Wrapper } from "../wrapper";
import { Title } from "../title";
import { BigModalContext } from "@ct";
import { Loading as LoadingComponent } from "./loading";
import { Error } from "./error";
import { List } from "./list";

export const Info = () => {
  const [fileInfoData, setFileInfoData] = useState<FileInfoDB>({});
  const [loading, setLoading] = useState<Loading>("idle");

  const { fileId } = useContext(BigModalContext);

  const getFileInfoData = async () => {
    setLoading("loading");
    const res = await fetch(`/api/get-info/${fileId}`);

    if (!res.ok) {
      setLoading("error");
      console.error(await res.text());
    }

    const data = await res.json();
    setFileInfoData(data.message.file);
    setLoading("success");
  };

  useEffect(() => {
    getFileInfoData();
  }, []);

  return (
    <Wrapper>
      <div className="max-w-[520px] w-full p-6 bg-card-bg-c1-light dark:bg-card-bg-c1-dark flex flex-col gap-7 rounded-xl">
        <Title title="Info" />
        {loading === "success" && <List data={fileInfoData} title="File" />}
        {loading === "loading" && <LoadingComponent />}
        {loading === "error" && <Error />}
      </div>
    </Wrapper>
  );
};
