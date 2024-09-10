import type { FileData } from "@tp";

import { BigWrapper } from "../../../wrappers";
import { NotFound } from "./not-found";
import { Files } from "./files";
import { File } from "./file";

type DirectoryProps = {
  files: FileData[] | undefined;
  file: FileData | undefined;
};

export const Directory = ({ files, file }: DirectoryProps) => {
  return (
    <BigWrapper>
      <div
        className={`${!file ? "w-full" : "lg:w-[calc(60%-10px)] lg:flex hidden"} h-full py-5 px-5 dark:bg-card-bg-c1-dark bg-card-bg-c1-light rounded-3xl overflow-y-hidden flex-col`}
      >
        {/*<Navbar />*/}
        {files && files.length > 0 ? <Files files={files} /> : <NotFound />}
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
