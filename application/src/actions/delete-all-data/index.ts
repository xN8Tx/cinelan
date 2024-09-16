"use server";
import type { ServerActionType } from "@tp";

import { revalidatePath } from "next/cache";
import { deleteDataAndFiles } from "@lb";

import { Files } from "@md";

export const deleteAllData: ServerActionType = async () => {
  try {
    const files = await Files.findAll({
      where: {
        file_id: null,
      },
    });

    if (files.length === 0)
      return {
        message: "No files founded in database.",
      };
    await Promise.all(files.map((file) => deleteDataAndFiles(file.id)));

    revalidatePath("/");
    return {
      success: "All files successfully delete.",
    };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Server error. Can not delete files and data in database. Watch more information in Settings -> Logs",
    };
  }
};
