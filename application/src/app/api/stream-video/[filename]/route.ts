import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import path, { resolve } from "path";
import fs, { ReadStream } from "fs";
import { rangeParse } from "@lb";
import ffmpeg from "fluent-ffmpeg";
import { PassThrough, Readable, Transform } from "stream";

type Params = {
  params: {
    filename: string;
  };
};

/**/

const CHUNK_SIZE = 5 * 1024 * 1024; // 5 MB

export const GET = async (req: NextRequest, { params }: Params) => {
  try {
    const fileName = params.filename;
    const filePath = path.join(process.env.ORIGIN_FOLDER_PATH, fileName);

    if (!fs.existsSync(filePath)) {
      return NextResponse.json(
        {
          message: `File with path ${filePath} not found`,
        },
        { status: 404 },
      );
    }

    const range = req.headers.get("range");
    const fileSize = fs.statSync(filePath)["size"];

    if (range) {
      let { start = 0, end = CHUNK_SIZE + start } = rangeParse(range);

      if (end >= fileSize) {
        end = fileSize - 1;
      }

      if (start >= fileSize || end >= fileSize) {
        return NextResponse.json(
          { message: "Incorrect range" },
          { status: 416 },
        );
      }

      const chunkSize = end - start + 1;
      if (chunkSize === 0) {
        console.log("Chunk size is null");
      }

      const fileStream = fs.createReadStream(filePath, { start, end });
      const videoReadableStream = new PassThrough(); //      videoReadableStream._read = () => {};
      const videoReadableStreamTest = new PassThrough(); //      videoReadableStream._read = () => {};
      console.log(`bytes=${start}-${end}/${fileSize}`);

      /*await new Promise((resolve, reject) => {
        const command = ffmpeg(fileStream)
          .videoCodec("libx264")
          .audioCodec("aac")
          .format("mp4")
          .outputOptions(["-movflags frag_keyframe+empty_moov"])
          .output(`${process.env.TMP_FOLDER_PATH}/${Date.now()}-new.mp4`);
        /* 
        command.pipe(videoReadableStream);
        command
          .on("end", () => {
            console.log("FFmpeg finished processing");
            resolve(true);
          })
          .on("error", (err) => {
            console.error("FFmpeg error:", err);
            reject(err);
          });
        command.run();
      });*/
      const command = ffmpeg(fileStream)
        .videoCodec("libx264")
        .audioCodec("aac")
        .format("mp4")
        .outputOptions(["-movflags frag_keyframe+empty_moov"])
        .output(videoReadableStreamTest);
      command
        .on("end", () => {
          console.log("FFmpeg finished processing");
        })
        .on("error", (err) => {
          console.error("FFmpeg error:", err);
        });
      command.run();

      return new Response(videoReadableStream as unknown as ReadableStream, {
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
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 },
    );
  }
};
