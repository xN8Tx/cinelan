"use client";
import { SmallModalContext } from "@ct";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";

export const useFileFetch = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const { setSmallModalType, setLoadingProgress, setSmallModalMessage } =
    useContext(SmallModalContext);

  const fileFetch = async (formData: FormData, route: string) => {
    setLoading(true);
    setSmallModalType("loading");
    setSmallModalMessage("File is loading");

    const xhr = new XMLHttpRequest();

    xhr.responseType = "json";

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setLoadingProgress(percentComplete);

        if (percentComplete === 100) {
          setSmallModalMessage("File converting");
        }
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        const slug = xhr.response.message.file.slug;

        setSmallModalMessage("File uploaded successfully");
        setSmallModalType("success");
        router.push(`/${slug}`);
      } else {
        setSmallModalMessage("Error uploading file. Watch info in console");
        setSmallModalType("error");
      }
      setLoading(false);
    };

    xhr.onerror = (err) => {
      console.log(err);
    };

    xhr.open("POST", route);
    xhr.send(formData);
  };

  return {
    fileFetchLoading: loading,
    fileFetch,
  };
};
