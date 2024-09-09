import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { FileInfo } from "@md";

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

    const responseInfo = await FileInfo.findOne({
      where: {
        file_id: Number(id) === 0 ? null : Number(id),
      },
    });

    return NextResponse.json(
      {
        message: {
          file: responseInfo?.toJSON(),
        },
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error || "" },
      { status: 500 },
    );
  }
};
