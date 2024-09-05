import { ffprobe } from "fluent-ffmpeg";

export const getVideoDuration = (fileName: string) => {
  return new Promise((resolve, reject) => {
    ffprobe(
      `${process.env.ORIGIN_FOLDER_PATH}/${fileName}`,
      (err, metadata) => {
        if (err) {
          reject(err);
        } else {
          const duration = metadata.format.duration;
          resolve(duration);
        }
      },
    );
  });
};
