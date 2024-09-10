import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import { Files } from "@md";

export const PUT = async (req: NextRequest) => {
  try {
    const data = await req.formData();
    const id = data.get("id")?.toString();

    console.log(data);

    if (!id || isNaN(Number(id))) {
      throw new Error("Invalid id parameter");
    }

    const fileId = Number(data.get("fileId")!.toString());
    const file = await Files.findOne({ where: { id } });

    if (!file) {
      throw new Error(`Can not find file with id: ${id}`);
    }

    file.file_id = fileId === 0 ? undefined : fileId;
    file.name = data.get("name")!.toString();

    await file.save();

    return NextResponse.json({ message: file.toJSON() }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error || "" },
      { status: 500 },
    );
  }
};
