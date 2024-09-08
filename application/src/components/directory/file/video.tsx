import type { FileData } from "@tp";
import VideoPlayer from "../../video-player";

type VideoProps = {
  file: FileData;
};

export const Video = ({ file }: VideoProps) => {
  return (
    <div className="w-full aspect-video rounded-xl overflow-hidden">
      <VideoPlayer
        src={`/${process.env.ORIGIN_FOLDER_NAME}/${file.original_source}`}
        poster={file.poster!.original_source}
      />
    </div>
  );
};
