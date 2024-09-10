import { FileData } from "@tp";
import { Item } from "./item";

type FilesProps = {
  files: FileData[];
};

export const Files = ({ files }: FilesProps) => {
  return (
    <div className="w-full pb-10 h-full overflow-y-scroll flex flex-col gap-3 overflow-x-hidden mt-3">
      {files.map((file) => (
        <Item key={file.id} file={file} />
      ))}
    </div>
  );
};
