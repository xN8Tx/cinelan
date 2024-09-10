import { unlink } from "fs/promises";

export const deleteFile = async (path: string) => {
  try {
    await unlink(path);
    return true;
  } catch (error) {
    console.log("Can not delete tmp file");
    throw new Error(error as string);
  }
};
