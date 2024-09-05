export type FileDescriptionDB = {
  id: number;
  file_id: number;
  original_name: string;
  description?: string;
  date?: string;
  status?: boolean;
  duration?: bigint;
  box_office?: string;
  budget?: string;
};

export type FileInfoDB = {
  id: number;
  file_id: number;
  duration: bigint;
  size: bigint;
  format: string;
  original_name: string;
};

export type FileDB = {
  id: number;
  type_id: number;
  poster_id?: number;
  name: string;
  original_source: string;
  time: string;
  file_id?: number;
  slug: string;
};

export type PosterDB = {
  id: number;
  original_source: string;
  size?: string;
};

export type TypeDB = {
  id: number;
  name: string;
};

export type UserDB = {
  id: number;
  name: string;
};

export type WatchedFileDB = {
  id: number;
  user_id: number;
  file_id?: number;
  time?: bigint;
};
