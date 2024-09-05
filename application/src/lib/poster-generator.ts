import Ffmpeg from "fluent-ffmpeg";

export const posterGenerator = (path: string, duration: number) => {
  const posterName = `${Date.now()}.png`;
  const timestamp = (duration / 2).toFixed(2);

  return new Promise((resolve, reject) => {
    Ffmpeg(`${process.env.ORIGIN_FOLDER_PATH}/${path}`)
      .on("end", () => {
        resolve(`/${process.env.POSTER_FOLDER_NAME}/${posterName}`);
      })
      .on("error", (err) => {
        console.error("Error creating thumbnail:", err);
        reject(err);
      })
      .screenshots({
        timestamps: [timestamp],
        filename: posterName,
        folder: process.env.POSTER_FOLDER_PATH,
        size: "320x240",
      });
  });
};
