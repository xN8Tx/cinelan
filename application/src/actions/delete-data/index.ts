"use server";
import type { ServerActionType } from "@tp";
import { deleteDataAndFiles } from "@lb";

export const deleteData: ServerActionType<number> = async (args?: number) => {
  try {
    if (!args || isNaN(Number(args))) {
      return {
        error: `Server error. Can not delete file with id: ${args}. Watch more information in Settings -> Logs`,
      };
    }

    await deleteDataAndFiles(Number(args));

    return {
      error: `Successfully delete file with id: ${args}`,
    };
  } catch (error) {
    console.log("My error:", error);
    return {
      error: `Server error. Can not delete file with id: ${args}. Watch more information in Settings -> Logs`,
    };
  }
};
