import { FileDB, FileDescriptionDB, PosterDB, TypeDB } from "./database";

export type UploadSelectorValues = "movie" | "serial" | "file" | "folder" | "";

export type Loading = "success" | "loading" | "error" | "idle";

export type UploadData = {
  type: UploadSelectorValues;
  file: File | null;
  fileId: string;
  name: string;
};

export type FolderData = Array<FileData>;

export type PageData = { files: Array<FileData>; file?: FileData } | null;

export type PageProps = {
  params: {
    path?: string[];
  };
  searchParams: { [x: string]: string };
};

export type FileData = FileDB & {
  type: TypeDB;
  poster?: PosterDB;
  description?: FileDescriptionDB;
};
