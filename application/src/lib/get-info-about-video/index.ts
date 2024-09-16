import fs from "fs/promises";
import path from "path";

export const getInfoAboutVideo = async (sourceFilePath: string) => {
  return {
    tmpSource: path.join(process.env.ORIGIN_FOLDER_PATH, sourceFilePath),
    originalName: sourceFilePath,
    format: sourceFilePath.split(".").pop()!,
    size: (
      await fs.stat(path.join(process.env.ORIGIN_FOLDER_PATH, sourceFilePath))
    ).size,
  };
};
