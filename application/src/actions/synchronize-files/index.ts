"use server";
import type { ServerActionType } from "@tp";

import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

import { uploadFile } from "@lb";
import { Files } from "@md";

const videoFormats = [
  ".mp4", // MPEG-4
  ".avi", // Audio Video Interleave
  ".mov", // Apple QuickTime Movie
  ".mkv", // Matroska Video
  ".wmv", // Windows Media Video
  ".flv", // Flash Video
  ".ogv", // Ogg Video
  ".m4v", // MPEG-4 Video
];

export const synchronizeFiles: ServerActionType = async () => {
  try {
    const filesFromDB = await Files.findAll();
    const filesFromDisk: string[] = await fs.readdir(
      process.env.ORIGIN_FOLDER_PATH,
    );

    const uknownDiskFiles = filesFromDisk.filter(
      (file) => !filesFromDB.some((db) => db.original_source === file),
    );

    const uknownDiskMedia = uknownDiskFiles.filter((file) =>
      videoFormats.includes(
        path.extname(path.join(process.env.ORIGIN_FOLDER_PATH, file)),
      ),
    );

    if (uknownDiskMedia.length === 0) {
      return {
        message:
          "No new files found. Check their presence on the disk and supported formats in the documentation on GitHub.",
      };
    }

    await Promise.all(
      uknownDiskMedia.map((file) => uploadFile(new FormData(), file)),
    );

    revalidatePath("/");

    return {
      success: `Successfully add ${uknownDiskMedia.length} new files to application.`,
    };
  } catch (error) {
    console.error(error);
    return {
      error:
        "Server error. Can not synchronize disk files. Watch more information in Settings -> Logs",
    };
  }
};
