import fs from "fs/promises";

export const createFolders = async (folderPath, errorString) => {
  try {
    await fs.access(folderPath);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.mkdir(folderPath, { recursive: true });
    } else {
      throw new Error(
        `${errorString} can not access or create "${folderPath}". Message: ${error.message}`,
      );
    }
  }
};
