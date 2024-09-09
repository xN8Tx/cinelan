import type { FileData } from "@tp";

import { BigWrapper } from "../big-wrapper";
import { Files } from "./files";
import { Navbar } from "./navbar";
import { File } from "./file";

type DirectoryProps = {
  files: FileData[];
  file: FileData | undefined;
};

export const Directory = ({ files, file }: DirectoryProps) => {
  return (
    <BigWrapper>
      <div
        className={`${!file ? "w-full" : "lg:w-[calc(60%-10px)] lg:flex hidden"} h-full py-5 px-5 dark:bg-card-bg-c1-dark bg-card-bg-c1-light rounded-3xl overflow-y-hidden flex-col`}
      >
        <Navbar />
        <Files files={files} />
      </div>
      {file && (
        <div
          className={`lg:w-[calc(40%-10px)] w-full h-full py-5 px-5 dark:bg-card-bg-c1-dark bg-card-bg-c1-light rounded-3xl overflow-y-hidden flex gap-5 flex-col`}
        >
          <File file={file} />
        </div>
      )}
    </BigWrapper>
  );
};
