import { FileInfo, Files, Posters, Types } from "@md";
import {
  loadFile,
  getVideoDuration,
  slugGenerator,
  posterGenerator,
} from "@lb";

export const file = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const type = formData.get("type")?.toString();
  const fileId = Number(formData.get("fileId")?.toString());

  const { status, source, originalName, size, format } =
    await loadFile(formData);

  if (!status) {
    throw new Error("Can not add file");
  }

  // Create file
  const fileName = name && name.length > 0 ? name : originalName;
  const slug = await slugGenerator(fileName!);

  const newFile = await Files.create({
    name: fileName,
    original_source: source,
    time: new Date().toLocaleString(),
    file_id: fileId === 0 ? null : fileId,
    type_id: (await Types.findOne({ where: { name: type } }))?.id,
    slug,
  });

  // Create fileInfo
  const duration = await getVideoDuration(source!);
  await FileInfo.create({
    size,
    format,
    duration,
    file_id: newFile.id,
    original_name: originalName,
  });

  // Create poster
  const poster = await posterGenerator(source!, duration as number);
  await Posters.create({
    file_id: newFile.id,
    original_source: poster,
  });

  return { newFile, status };
};
