import type { FileDB } from "@tp";
import { FileInfo, Files, Posters, Types } from "@md";
import {
  loadTmpVideo,
  slugGenerator,
  deleteFile,
  getVideoDuration,
  getConvertVideoAndPoster,
} from "@lb";

export const file = async (formData: FormData): Promise<FileDB> => {
  try {
    const name = formData.get("name")?.toString();
    const type = formData.get("type")?.toString();
    const fileId = Number(formData.get("fileId")?.toString());

    // Save file to tmp folder
    const tmpVideo = await loadTmpVideo(formData);
    if (!tmpVideo) throw new Error("Can not load a tmp file");

    const { tmpSource, originalName, size, format } = tmpVideo;

    const duration = await getVideoDuration(tmpSource);

    const { filePath, posterPath } = await getConvertVideoAndPoster(
      tmpSource,
      format,
      true,
      duration,
    );

    // Create file
    const fileName = name && name.length > 0 ? name : originalName;
    const slug = await slugGenerator(fileName!);

    const newFile = await Files.create({
      name: fileName,
      original_source: filePath,
      time: new Date().toLocaleString(),
      file_id: fileId === 0 ? null : fileId,
      type_id: (await Types.findOne({ where: { name: type } }))?.id,
      slug,
    });

    // Create fileInfo
    await FileInfo.create({
      size,
      format,
      duration,
      file_id: newFile.id,
      original_name: originalName,
    });

    // Create poster
    await Posters.create({
      file_id: newFile.id,
      original_source: posterPath,
    });

    deleteFile(`${process.env.TMP_FOLDER_PATH}/${tmpSource}`);

    return newFile.toJSON();
  } catch (error) {
    throw new Error(error as string);
  }
};
