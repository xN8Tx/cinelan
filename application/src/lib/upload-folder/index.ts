import type { FileDB } from "@tp";
import { Files, Types } from "@md";

import { slugGenerator } from "@lb";

export const uploadFolder = async (formData: FormData): Promise<FileDB> => {
  const name = formData.get("name")?.toString();
  const type = formData.get("type")?.toString();
  const fileId = Number(formData.get("fileId")?.toString());

  const newFile = await Files.create({
    name,
    original_source: "",
    time: new Date().toLocaleString(),
    file_id: fileId === 0 ? null : fileId,
    type_id: (await Types.findOne({ where: { name: type } }))?.id,
    slug: await slugGenerator(name!),
  });

  return newFile.toJSON();
};
