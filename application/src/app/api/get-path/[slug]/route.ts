import type { FileDB, Paths } from "@tp";
import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { Files, Types } from "@md";

type Params = {
  params: {
    slug: string;
  };
};

const getPath = async (array: Paths[], slug?: string, id?: number) => {
  const path: Paths[] = JSON.parse(JSON.stringify(array));

  let whereObject = {};

  if (slug) whereObject = { slug };
  if (id) whereObject = { id };

  const response = await Files.findOne({
    where: whereObject,
    include: [
      {
        model: Types,
        as: "type",
      },
    ],
  });

  if (!response) return [{ name: "Error", slug: "/" }];

  path.push({ name: response.name, slug: response.slug });

  if (response.file_id) {
    return await getPath(path, undefined, response.file_id);
  }

  const typeName = response.toJSON().type.name;
  const firstRoute =
    typeName === "folder" || typeName === "file"
      ? "File"
      : typeName === "movie"
        ? "Movies"
        : "Serials";

  path.push({ name: firstRoute, slug: "/" });

  return path.reverse();
};

export const GET = async (_: NextRequest, { params }: Params) => {
  try {
    const { slug } = params;

    if (!slug) {
      throw new Error("Params slug is null or NaN");
    }

    const slugs: Paths[] = await getPath([], slug);

    return NextResponse.json({ message: slugs }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error || "" },
      { status: 500 },
    );
  }
};
