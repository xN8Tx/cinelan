import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { deleteDataAndFiles } from "@lb";

type Params = {
  params: {
    id: string;
  };
};

export const DELETE = async (_: NextRequest, { params }: Params) => {
  try {
    const { id } = params;

    if (!id || isNaN(Number(id))) {
      throw new Error("Params Id is null or NaN");
    }

    await deleteDataAndFiles(Number(id));

    return NextResponse.json(
      {
        message: { text: "Success upload files" },
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("My error:", error);

    return NextResponse.json(
      { message: "Internal server error", error: error || "" },
      { status: 500 },
    );
  }
};
