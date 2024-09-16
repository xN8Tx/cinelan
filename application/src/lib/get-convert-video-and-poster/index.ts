import ffmpeg from "fluent-ffmpeg";

export const getConvertVideoAndPoster = async (
  filePath: string,
  format: string,
  isScreenShot: boolean = false,
  duration?: number,
): Promise<{ filePath: string; posterPath: string }> => {
  return new Promise((resolve, reject) => {
    const posterName = `${Date.now()}.png`;
    const fileName = `${Date.now()}.mp4`;

    let args: string[] = [];
    if (format === "mov") {
      args = ["-map", "0", "-map", "-0:a:2", "-c", "copy"];
    }

    const command = ffmpeg(`${filePath}`)
      //.outputOptions(args)
      .output(`${process.env.ORIGIN_FOLDER_PATH}/${fileName}`)
      .on("end", () => {
        resolve({
          filePath: fileName,
          posterPath: `/api/poster/${posterName}`,
        });
      })
      .on("error", (error) => {
        console.log("Can not convert video.", error);
        reject(error);
      });

    if (isScreenShot && duration) {
      const timestamp = (duration / 2).toFixed(2);

      command.screenshot({
        timestamps: [timestamp],
        filename: posterName,
        folder: process.env.POSTER_FOLDER_PATH,
        size: "600x400",
      });
    }

    command.run();
  });
};
