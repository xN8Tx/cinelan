"use server";
import type { FileData, PageData, PageProps } from "@tp";
import { Files, Posters, Types } from "@md";

type GetPageData = (
  props: PageProps,
  type: "movie" | "serial" | null,
) => Promise<PageData>;

const fileTypes = ["movie", "file", "episode"];
const pagePath = ["serials", "movies"];

const getFiles = async (
  searchType: string[],
  fileId: number | null = null,
  isSort: boolean = false,
) => {
  const data = await Files.findAll({
    where: {
      file_id: fileId,
    },
    include: [
      {
        model: Types,
        as: "type",
        where: {
          name: searchType,
        },
      },
      {
        model: Posters,
        as: "poster",
        required: false,
      },
    ],
    raw: false,
  });

  const files = JSON.parse(JSON.stringify(data)) as FileData[];

  if (!isSort) return files;
  return files.sort((a, b) => {
    if (a.type.name === "folder" && b.type.name !== "folder") {
      return -1;
    }
    if (a.type.name !== "folder" && b.type.name === "folder") {
      return 1;
    }
    return 0;
  });
};

const getFile = async (slug: string) => {
  const data = await Files.findOne({
    where: {
      slug: slug,
    },
    include: [
      {
        model: Types,
        as: "type",
      },
      {
        model: Posters,
        as: "poster",
      },
    ],
    raw: false,
  });

  return JSON.parse(JSON.stringify(data)) as FileData;
};

export const getPageData: GetPageData = async (
  props: PageProps,
  type: "movie" | "serial" | null = null,
) => {
  let searchType = type ? [`${type}`] : ["file", "folder"];
  let isSort = type ? false : true;

  if (!props.params.path)
    return { files: await getFiles(searchType, null, isSort) };

  const lastPathIndex = props.params.path.length - 1;
  const lastPath = props.params.path[lastPathIndex];

  // if lastPath
  if (lastPathIndex === 0 && pagePath.includes(lastPath))
    return {
      files: await getFiles(searchType),
    };

  const lastChild = await getFile(props.params.path);

  // 404 error
  if (!lastChild) return null;

  const parentId = lastChild.file_id;

  // if last path is file
  if (fileTypes.includes(lastChild.type.name)) {
    return {
      files: await getFiles(searchType, parentId, isSort),
      file: lastChild,
    };
  }

  return {
    files: await getFiles(searchType, lastChild.id, isSort),
  };
};
