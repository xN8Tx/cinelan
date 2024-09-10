"use client";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export const NotFound = () => {
  const router = useRouter();

  const backButtonHandler = () => {
    router.push("/");
  };

  return (
    <div className="w-full h-full relative">
      <div className="max-w-[534px] flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-heading-c1-light dark:text-heading-c1-dark">
            404 - File Not Found
          </h3>
          <p className="text-base dark:text-p-text-c1-dark text-p-text-c1-light">
            Looks like you{"'"}re trying to access a file that doesn{"'"}t exist
            here. Maybe it was moved, or the URL is incorrect. Please
            double-check the address or return to the home page.
            <br /> Don{"'"}t worry, the adventure isn{"'"}t over—let{"'"}s get
            you back on track!
          </p>
        </div>
        <Button
          className="w-full absolute bottom-0"
          color="primary"
          onClick={backButtonHandler}
        >
          Files
        </Button>
      </div>
    </div>
  );
};
