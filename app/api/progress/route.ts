import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { user_id, node_id } = await request.json();

    // Cek apakah progress sudah ada
    const existingProgress = await prisma.db_pencapaian.findFirst({
      where: {
        user_id: user_id,
        node_id: node_id,
      },
    });

    if (existingProgress) {
      return NextResponse.json(
        { message: "Progress already exists" },
        { status: 400 }
      );
    }

    // Buat progress baru
    const newProgress = await prisma.db_pencapaian.create({
      data: {
        user_id: user_id,
        node_id: node_id,
        completed_at: new Date(),
      },
    });

    return NextResponse.json(newProgress);
  } catch (error) {
    console.error("Error creating progress:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
