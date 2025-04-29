import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { user_id, node_id, status } = await request.json();

    if (!user_id || !node_id) {
      return NextResponse.json(
        { message: "user_id and node_id are required" },
        { status: 400 }
      );
    }

    const existingProgress = await prisma.db_pencapaian.findFirst({
      where: {
        user_id,
        node_id,
      },
    });

    if (existingProgress) {
      return NextResponse.json(
        { message: "Progress already exists" },
        { status: 409 }
      );
    }

    const newProgress = await prisma.db_pencapaian.create({
      data: {
        user_id,
        node_id,
        status: status ?? "DONE",
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
