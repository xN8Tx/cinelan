import { slugGenerator } from "@lb";
import { Files, Types } from "@md";

export const folder = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const type = formData.get("type")?.toString();
  const fileId = Number(formData.get("file_id")?.toString());

  const newFile = await Files.create({
    name,
    original_source: "",
    time: new Date().toLocaleString(),
    file_id: isNaN(fileId) ? null : fileId,
    type_id: (await Types.findOne({ where: { name: type } }))?.id,
    slug: await slugGenerator(name!),
  });

  return { newFile, status: true };
};
