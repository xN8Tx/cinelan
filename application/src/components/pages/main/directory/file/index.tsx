import type { FileData } from "@tp";

import { Title } from "./title";
import { Video } from "./video";
import { Info } from "./info";
import { SmallButtons } from "./small-buttons";
import { BigButtons } from "./big-buttons";

type FileProps = {
  file: FileData;
};

export const File = ({ file }: FileProps) => {
  return (
    <div className="w-full h-full flex flex-col gap-7">
      <Title name={file.name} />
      <div className="w-full h-full flex flex-col justify-between gap-8 overflow-y-scroll">
        <div className="w-full flex flex-col gap-4">
          <Video file={file} />
          <Info description={file.description} />
        </div>
        <div className="w-full flex flex-col gap-4">
          <SmallButtons file={file} />
          <BigButtons file={file} />
        </div>
      </div>
    </div>
  );
};
