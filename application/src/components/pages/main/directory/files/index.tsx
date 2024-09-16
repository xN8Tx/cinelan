import { FileData } from "@tp";
import { Item } from "./item";
import { Card } from "../../../../wrappers";
import { NotFound } from "../not-found";

type FilesProps = {
  files: FileData[] | undefined;
  size: "lg" | "sm";
};

export const Files = ({ files, size }: FilesProps) => {
  return (
    <Card size={size} height="lg">
      <div className="w-full pb-10 h-full overflow-y-scroll flex flex-col gap-3 overflow-x-hidden mt-3">
        {files && files.length > 0 ? (
          files.map((file) => <Item key={file.id} file={file} />)
        ) : (
          <NotFound />
        )}
      </div>
    </Card>
  );
};
