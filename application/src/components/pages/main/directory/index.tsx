import type { FileData } from "@tp";

import { BigWrapper } from "../../../wrappers";
import { Files } from "./files";
import { File } from "./file";

type DirectoryProps = {
  files: FileData[] | undefined;
  file: FileData | undefined;
};

export const Directory = ({ files, file }: DirectoryProps) => {
  return (
    <BigWrapper>
      <Files files={files} size={file ? "sm" : "lg"} />
      {file && <File file={file} />}
    </BigWrapper>
  );
};
