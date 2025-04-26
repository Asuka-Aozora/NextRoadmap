import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const nodes = await prisma.db_nodes.findMany();
    return NextResponse.json({
      status: true,
      code: 200,
      message: "Nodes fetched successfully",
      data: nodes,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: false,
        code: 500,
        message: "Gagal ambil nodes",
        errors: null,
      },
      { status: 500 }
    );
  }
}
