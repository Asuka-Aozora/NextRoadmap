import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const edges = await prisma.db_edges.findMany();
    return NextResponse.json({
      status: true,
      code: 200,
      message: "Edges fetched successfully",
      data: edges,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        status: false,
        code: 500,
        message: "Gagal ambil edges",
        errors: null,
      },
      { status: 500 }
    );
  }
}
