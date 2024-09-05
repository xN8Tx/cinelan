import type { UploadSelectorValues } from "@tp";
import type { NextRequest } from "next/server";

import { NextResponse } from "next/server";
import { file, folder } from "./types";

export const POST = async (req: NextRequest) => {
  try {
    const data = await req.formData();

    const type = data.get("type")?.toString();

    switch (type as UploadSelectorValues) {
      case "movie":
      case "serial":
      case "file": {
        const { status } = await file(data);

        return NextResponse.json({
          status,
        });
      }
      case "folder": {
        const { status } = await folder(data);
        return NextResponse.json({
          status,
        });
      }
      default: {
        throw new Error("Incorrect upload type");
      }
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error || "" },
      { status: 500 },
    );
  }
};
