import { createTables } from "./create-tables.mjs";
import { createFolders } from "./create-folders.mjs";
import { folders, setUpEnv } from "./constants.mjs";

const errorString = "😿 Error:";

export default async (phase, { defaultConfig }) => {
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

  // Initialize the database
  await createTables(errorString);

  const nextConfig = {};
  return nextConfig;
};
