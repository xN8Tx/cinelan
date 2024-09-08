import type { UploadSelectorValues } from "@tp";
import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import { file, folder } from "./types";

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();

    const type = data.get("type")?.toString();

    switch (type as UploadSelectorValues) {
      case "file": {
        await file(data);

        return NextResponse.json(
          {
            message: "Success upload file",
          },
          { status: 200 },
        );
      }
      case "folder": {
        await folder(data);
        return NextResponse.json(
          {
            message: "Success upload file",
          },
          { status: 200 },
        );
      }
      default: {
        throw new Error("Incorrect upload type");
      }
    }
  } catch (error) {
    console.log("My error:", error);

    return NextResponse.json(
      { message: "Internal server error", error: error || "" },
      { status: 500 },
    );
  }
};
