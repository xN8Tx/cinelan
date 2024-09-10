import { ffprobe } from "fluent-ffmpeg";

export const getVideoDuration = (fileName: string): Promise<number> => {
  return new Promise((resolve, reject) => {
    ffprobe(`${process.env.TMP_FOLDER_PATH}/${fileName}`, (err, metadata) => {
      if (err) {
        console.log("Can not get video duration");
        reject(err);
      } else {
        const duration = metadata.format.duration;

        if (!duration) {
          reject("Duration is null");
        } else {
          resolve(duration);
        }
      }
    });
  });
};
