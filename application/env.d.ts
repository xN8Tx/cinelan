declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_ANALYTICS_ID: string;
    NODE_ENV: "development" | "production" | "test";
    PORT: string;
    MAX_SIZE: string;
    UPLOAD_FOLDER: string;
    DATABASE_URL: string;
    ORIGIN_FOLDER_PATH: string;
    POSTER_FOLDER_PATH: string;
    LOGS_FOLDER_PATH: string;
    COMBINED_LOGS_PATH: string;
    ERROR_LOGS_PATH: string;
  }
}
