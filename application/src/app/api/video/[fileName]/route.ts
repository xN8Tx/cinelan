import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";
import { videoStream } from "@lb";
import { Files } from "@md";

// Функция для обработки диапазонных запросов для видеофайлов
export async function GET(
  request: NextRequest,
  { params }: { params: { fileName: string } },
) {
  const { fileName } = params;
  let filePath = path.join(process.env.ORIGIN_FOLDER_PATH, fileName);

  if (!fs.existsSync(filePath)) {
    const file = await Files.findOne({ where: { id: fileName } });

    if (!file) {
      return NextResponse.json({ message: "File not found" }, { status: 404 });
    }

    filePath = path.join(process.env.ORIGIN_FOLDER_PATH, file.original_source);
  }

  return videoStream(filePath, request);
}
