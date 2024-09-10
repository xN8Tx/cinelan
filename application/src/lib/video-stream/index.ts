import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import fs from "fs";

export const videoStream = (filePath: string, request: NextRequest) => {
  const fileStat = fs.statSync(filePath);
  const fileSize = fileStat.size;
  const range = request.headers.get("range");

  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize || end >= fileSize) {
      return NextResponse.json(
        { message: "Incorrect range" },
        { status: 416 },
      );
    }

    const chunkSize = end - start + 1;
    const fileStream = fs.createReadStream(filePath, { start, end });

    return new Response(fileStream as unknown as ReadableStream, {
      headers: {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": chunkSize.toString(),
        "Content-Type": "video/mp4",
      },
      status: 206,
    });
  }

  const fileStream = fs.createReadStream(filePath);
  return new Response(fileStream as unknown as ReadableStream, {
    headers: {
      "Content-Length": fileSize.toString(),
      "Content-Type": "video/mp4",
    },
    status: 200,
  });
};
