import {
  FileDescription,
  FileInfo,
  Files,
  Posters,
  Types,
  WatchedFiles,
} from "@md";
import { deleteFile } from "../delete-file";

export const deleteDataAndFiles = async (id: number) => {
  try {
    if (!process.env.ORIGIN_FOLDER_PATH) {
      throw new Error("process.env.ORIGIN_FOLDER_PATH is null");
    }

    const file = (
      await Files.findOne({
        where: { id: id },
        include: [
          {
            model: Types,
            as: "type",
          },
        ],
      })
    )?.toJSON();

    const poster = (
      await Posters.findOne({
        where: { file_id: id },
      })
    )?.toJSON();

    if (!file.id) {
      throw new Error("Cant find with this ID");
    }

    if (file.type === "serial" || file.type === "folder") {
      const files = await Files.findAll({
        where: { file_id: id },
      });

      if (files.length > 0) {
        await Promise.all(
          files.map((childFile) => deleteDataAndFiles(childFile.id)),
        );
      }
    }

    await FileInfo.destroy({
      where: {
        file_id: Number(id),
      },
    });
    await FileDescription.destroy({
      where: {
        file_id: Number(id),
      },
    });
    await WatchedFiles.destroy({
      where: {
        file_id: Number(id),
      },
    });
    await Posters.destroy({
      where: {
        file_id: Number(id),
      },
    });
    await Files.destroy({
      where: { id: Number(id) },
    });

    if (poster.original_source[0] === "/") {
      await deleteFile(
        `${process.env.UPLOAD_FOLDER_PATH}${poster.original_source}`,
      );
    }
    await deleteFile(
      `${process.env.ORIGIN_FOLDER_PATH}/${file.original_source}`,
    );
  } catch (error) {
    console.log(error);
    throw new Error("Can not delete data and files");
  }
};
