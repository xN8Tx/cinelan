import { unlink } from "fs/promises";

export const deleteTmpFile = async (fileName: string) => {
  try {
    await unlink(`${process.env.TMP_FOLDER_PATH}/${fileName}`);
    return true;
  } catch (error) {
    console.log("Can not delete tmp file");
    throw new Error(error as string);
  }
};
