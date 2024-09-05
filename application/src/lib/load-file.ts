import { createWriteStream } from "fs";
import { Readable } from "stream";

type LoadFile = (formData: FormData) => Promise<{
  status: boolean;
  source?: string;
  originalName?: string;
  format?: string;
  size?: number;
}>;

export const loadFile: LoadFile = async (formData: FormData) => {
  return new Promise(function (resolve) {
    // @ts-ignore
    const file: File | null = formData.get("file");

    if (!file) {
      resolve({ status: false });
    }

    const { size, name } = file!;

    const timestamp = Date.now();
    const format = (name as string).split(".").pop();
    const filename = `${timestamp}.${format}`;
    const filePath = `${process.env.ORIGIN_FOLDER_PATH}/${filename}`;

    const fileStream = createWriteStream(filePath);

    const videoReadableStream = new Readable(); // Create a new Readable stream
    videoReadableStream._read = () => {}; // Implement the _read function to satisfy stream requirements

    file?.arrayBuffer().then((buffer) => {
      videoReadableStream.push(Buffer.from(buffer)); // Push the video data to the readable stream
      videoReadableStream.push(null); // Signal the end of the data

      videoReadableStream
        .pipe(fileStream)
        .on("error", (error) => {
          console.error("Error while saving the file:", error);
          resolve({ status: false });
        })
        .on("finish", () => {
          console.log("File saved successfully");
          resolve({
            status: true,
            source: filename,
            originalName: name,
            format,
            size,
          });
        });
    });
  });
};
