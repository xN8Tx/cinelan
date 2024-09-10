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
    const fileId = id === "null" ? null : Number(id);

    if (fileId === null || isNaN(fileId)) {
      throw new Error("Invalid id parameter");
    }

    const responseFolders = await Files.findAll({
      where: {
        file_id: fileId === 0 ? null : fileId,
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

    if (fileId === 0) {
      selectorFolders.unshift({ label: "-- Home --", key: "0", parentId: "0" });
    } else {
      const responseFolder = await Files.findOne({
        where: {
          id: fileId,
        },
      });

      const folder = JSON.parse(JSON.stringify(responseFolder)) as FileDB;

      selectorFolders.unshift(
        {
          label: "-- Go back --",
          key: "-1", // For going back
          parentId: folder.file_id ? folder.file_id.toString() : "0",
        },
        {
          label: `-- ${folder.name} --`,
          key: folder.id.toString(),
          parentId: folder.file_id ? folder.file_id.toString() : "0",
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
