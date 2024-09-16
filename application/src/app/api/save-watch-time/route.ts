import { WatchedFiles } from "@md";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const formData = await req.formData();

    const userId = formData.get("userId")?.toString();
    const fileId = formData.get("fileId")?.toString();
    const time = formData.get("time")?.toString();

    if (!userId || !fileId || !time) {
      throw new Error("Invalid data for upgrade");
    }

    const [watchedFiles, _] = await WatchedFiles.findOrCreate({
      where: {
        user_id: Number(userId),
        file_id: Number(fileId),
      },
      defaults: {
        time: 0,
      },
    });

    await WatchedFiles.update(
      {
        time: Number(time).toFixed(0),
      },
      {
        where: {
          id: watchedFiles.id,
        },
      },
    );

    return NextResponse.json({ message: "Time updated" });
  } catch (error) {
    console.log("My error:", error);

    return NextResponse.json(
      { message: "Internal server error", error: error || "" },
      { status: 500 },
    );
  }
};
