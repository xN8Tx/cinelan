"use client";
import { SmallModalContext } from "@ct";
import { useContext, useState } from "react";

export const useFileFetch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setSmallModalType, setLoadingProgress, setSmallModalMessage } =
    useContext(SmallModalContext);

  const fileFetch = async (formData: FormData, route: string) => {
    setLoading(true);
    setSmallModalType("loading");
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = Math.round((event.loaded / event.total) * 100);
        setLoadingProgress(percentComplete);
      }
    };

    xhr.onload = () => {
      if (xhr.status === 200) {
        setSmallModalMessage("File uploaded successfully");
        setSmallModalType("success");
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
