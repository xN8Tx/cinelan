import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { WatchedFiles } from "@md";

export const GET = async (
  _: NextRequest,
  { params }: { params: { fileId: string } },
) => {
  const { fileId } = params;

  const watchedRecord = await WatchedFiles.findOne({
    where: { file_id: Number(fileId) },
  });

  return NextResponse.json({ watchedTime: watchedRecord?.time || 0 });
};
