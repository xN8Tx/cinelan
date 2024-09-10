import { FileDB, FileDescriptionDB, PosterDB, TypeDB } from "./database";

// export type UploadSelectorValues = "movie" | "serial" | "file" | "folder" | "";
export type UploadSelectorValues = "file" | "folder" | "";

export type Loading = "success" | "loading" | "error" | "idle";

export type UploadData = {
  type: UploadSelectorValues;
  file: File | null;
  fileId: string | null;
  name: string;
};

export type FolderData = Array<FileData>;

export type PageData = { files: Array<FileData>; file?: FileData } | null;

export type PageProps = {
  params: {
    path?: string;
  };
  searchParams: { [x: string]: string };
};

export type EditData = {
  name: string;
  fileId: string | null;
};

export type FileData = FileDB & {
  type: TypeDB;
  poster?: PosterDB;
  description?: FileDescriptionDB;
};

export type Paths = {
  name: string;
  slug: string;
};
