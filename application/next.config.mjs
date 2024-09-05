import { createFolders } from "./create-folders.mjs";
import { folders, setUpEnv } from "./constants.mjs";

import dotenv from "dotenv";

const errorString = "😿 Error:";

export default async (phase, { defaultConfig }) => {
  const nextConfig = {};
  if (process.env.NODE_ENV === "test") return nextConfig;

  dotenv.config();

  if (!process.env.UPLOAD_FOLDER) {
    throw new Error(
      `${errorString} value of UPLOAD_FOLDER is empty, please set up environment.`,
    );
  }

  // Create necessary folders
  await Promise.all(
    Object.values(folders).map((folder) => createFolders(folder, errorString)),
  );

  setUpEnv();

  return nextConfig;
};
