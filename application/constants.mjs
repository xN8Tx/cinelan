const UPLOAD_FOLDER_NAME = "upload";
const LOGS_FOLDER_NAME = "logs";
const POSTER_FOLDER_NAME = "poster";
const ORIGIN_FOLDER_NAME = "origin";
const TMP_FOLDER_NAME = "tmp";

const UPLOAD_FOLDER_PATH = `/app/${UPLOAD_FOLDER_NAME}`;
const LOGS_FOLDER_PATH = `${UPLOAD_FOLDER_PATH}/${LOGS_FOLDER_NAME}`;
const POSTER_FOLDER_PATH = `${UPLOAD_FOLDER_PATH}/${POSTER_FOLDER_NAME}`;
const ORIGIN_FOLDER_PATH = `${UPLOAD_FOLDER_PATH}/${ORIGIN_FOLDER_NAME}`;
const TMP_FOLDER_PATH = `${UPLOAD_FOLDER_PATH}/${TMP_FOLDER_NAME}`;

const COMBINED_LOGS_PATH = `${LOGS_FOLDER_PATH}/combined.log`;
const ERROR_LOGS_PATH = `${LOGS_FOLDER_PATH}/error.log`;

export const folders = {
  ORIGIN_FOLDER_PATH,
  POSTER_FOLDER_PATH,
  LOGS_FOLDER_PATH,
  TMP_FOLDER_PATH,
};

const envObject = {
  ...folders,
  COMBINED_LOGS_PATH,
  ERROR_LOGS_PATH,
  ORIGIN_FOLDER_NAME,
  POSTER_FOLDER_NAME,
  UPLOAD_FOLDER_PATH,
};

export const setUpEnv = () => {
  Object.keys(envObject).forEach((folder) => {
    process.env[folder] = envObject[folder];
  });
};
