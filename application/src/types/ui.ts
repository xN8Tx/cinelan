import { FileDB, FileDescriptionDB, PosterDB, TypeDB } from "./database";

export type UploadSelectorValues = "movie" | "serial" | "file" | "folder" | "";

export type UploadData = {
  type: UploadSelectorValues;
  file: File | null;
  name: string;
};

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
