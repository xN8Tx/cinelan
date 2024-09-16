"use server";
import type { ServerActionType } from "@tp";

import { revalidatePath } from "next/cache";
import { Files } from "@md";

export const editData: ServerActionType<FormData> = async (
  formData?: FormData,
) => {
  try {
    if (!formData) {
      return {
        error:
          "Client error. Can not find formData. Watch more information in Settings -> Logs",
      };
    }

    const id = formData.get("id")?.toString();

    if (!id || isNaN(Number(id))) {
      return {
        error:
          "Client error. Can not find correct file ID. Watch more information in Settings -> Logs",
      };
    }

    const fileId = Number(formData.get("fileId")!.toString());
    const file = await Files.findOne({ where: { id } });

    if (!file) {
      return {
        error: `Server error. Can not find file with id: ${id}. Watch more information in Settings -> Logs`,
      };
    }

    file.file_id = fileId === 0 ? undefined : fileId;
    file.name = formData.get("name")!.toString();

    await file.save();

    revalidatePath(`/${file.slug}`);
    return {
      success: "Successfully edit file.",
    };
  } catch (error) {
    console.log(error);
    return {
      error: `Server error. Internal error. Watch more information in Settings -> Logs`,
    };
  }
};
