import type { FileDB } from "@tp";
import { FileInfo, Files, Posters, Types } from "@md";
import {
  loadTmpVideo,
  slugGenerator,
  deleteFile,
  getVideoDuration,
  getConvertVideoAndPoster,
  getInfoAboutVideo,
} from "@lb";

export const uploadFile = async (
  formData: FormData,
  sourceFilePath: string | null,
): Promise<FileDB> => {
  try {
    const name = formData.get("name")?.toString() || "";
    const type = formData.get("type")?.toString() || "file";
    const fileId = Number(formData.get("fileId")?.toString()) || 0;

    let tmpVideo = null;
    // Save file to tmp folder
    if (!sourceFilePath) {
      tmpVideo = await loadTmpVideo(formData);
      if (!tmpVideo) throw new Error("Can not load a tmp file");
    } else {
      tmpVideo = await getInfoAboutVideo(sourceFilePath);
    }

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

    deleteFile(tmpSource);

    return newFile.toJSON();
  } catch (error) {
    throw new Error(error as string);
  }
};
