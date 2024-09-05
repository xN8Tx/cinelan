import type { FileDB } from "@tp";
import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";

import { Files, Types } from "@md";

type Params = {
  params: {
    id: string;
  };
};

export const GET = async (_: NextRequest, { params }: Params) => {
  try {
    const { id } = params;

    if (!id || isNaN(Number(id))) {
      throw new Error("Params id is null or NaN");
    }

    const responseFolders = await Files.findAll({
      where: {
        file_id: Number(id) === 0 ? null : Number(id),
      },
      include: [
        {
          model: Types,
          as: "type",
          where: {
            name: "folder",
          },
        },
      ],
    });

    const folders = JSON.parse(JSON.stringify(responseFolders)) as FileDB[];

    const selectorFolders = folders.map((folder) => ({
      parentId: folder.file_id ? folder.file_id.toString() : "0",
      label: folder.name,
      key: folder.id.toString(),
    }));

    if (Number(id) === 0) {
      selectorFolders.unshift({ label: "-- Home --", key: "0", parentId: "0" });
    } else {
      const responseFolder = await Files.findOne({
        where: {
          id: Number(id),
        },
      });

      const folder = JSON.parse(JSON.stringify(responseFolder)) as FileDB;

      selectorFolders.unshift(
        {
          label: "-- Go back --",
          key: "null",
          parentId: "0",
        },
        {
          label: `-- ${folder.name} --`,
          parentId: folder.file_id ? folder.file_id.toString() : "0",
          key: folder.id.toString(),
        },
      );
    }
    return NextResponse.json({ message: selectorFolders }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error || "" },
      { status: 500 },
    );
  }
};
