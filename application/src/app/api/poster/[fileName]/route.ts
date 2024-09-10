import fs from "fs";
import path from "path";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params }: { params: { fileName: string } },
) {
  const { fileName } = params;
  const filePath = path.join(process.env.POSTER_FOLDER_PATH, fileName);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json({ message: "File not found" }, { status: 404 });
  }

  const fileStat = fs.statSync(filePath);
  const fileSize = fileStat.size;

  const fileStream = fs.createReadStream(filePath);
  return new Response(fileStream as unknown as ReadableStream, {
    headers: {
      "Content-Length": fileSize.toString(),
      "Content-Type": "image/png",
    },
    status: 200,
  });
}
