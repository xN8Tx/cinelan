"use client";
import { useContext } from "react";
import { SmallModalContext } from "@ct";

import { Success } from "./success";
import { Loading } from "./loading";
import { Message } from "./message";
import { Error } from "./errpr";

export const SmallModal = () => {
  const { smallModalType } = useContext(SmallModalContext);

  return (
    <div
      className="absolute left-0 bottom-5 w-full md:w-[calc(100%-1.25rem)]  h-12 data-[isactive=true]:opacity-100 opacity-0 translate-y-96 data-[isactive=true]:translate-y-0 transition-transform"
      data-isactive={(smallModalType !== null).toString()}
    >
      {smallModalType === "success" && <Success />}
      {smallModalType === "loading" && <Loading />}
      {smallModalType === "message" && <Message />}
      {smallModalType === "error" && <Error />}
    </div>
  );
};
