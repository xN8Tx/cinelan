"use client";
import type { UploadData } from "@tp";

import { useContext, useState } from "react";

import { Button } from "@nextui-org/react";
import { IoClose } from "react-icons/io5";

import { useFileFetch } from "@hk";

import { BigModalContext } from "@ct";
import { Selector } from "./selector";
import { Wrapper } from "../wrapper";
import { Folder } from "./folder";
import { File } from "./file";
import { Title } from "../title";

const emptyUploadData: UploadData = {
  type: "",
  file: null,
  name: "",
  fileId: "0",
};

export const Upload = () => {
  const [uploadData, setUploadData] = useState<UploadData>(emptyUploadData);

  const { fileFetchLoading, fileFetch } = useFileFetch();

  const uploadHandler = async () => {
    try {
      const body = new FormData();

      Object.keys(uploadData).forEach((key) => {
        if (uploadData[key as keyof UploadData]) {
          body.set(key, uploadData[key as keyof UploadData]!);
        }
      });

      await fileFetch(body, "/api/upload");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <div className="max-w-[520px] w-full p-6 bg-card-bg-c1-light dark:bg-card-bg-c1-dark flex flex-col gap-7 rounded-xl">
        <Title title="Upload" />
        <Selector uploadData={uploadData} setUploadData={setUploadData} />
        {uploadData.type === "file" && (
          <File uploadData={uploadData} setUploadData={setUploadData} />
        )}
        {uploadData.type === "folder" && (
          <Folder uploadData={uploadData} setUploadData={setUploadData} />
        )}
        <Button
          size="lg"
          className="w-full"
          color="primary"
          onClick={uploadHandler}
          disabled={fileFetchLoading}
        >
          Upload
        </Button>
      </div>
    </Wrapper>
  );
};
