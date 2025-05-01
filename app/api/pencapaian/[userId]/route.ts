import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  context: { params: { userId: string } | Promise<{ userId: string }> }
) {
  const params = await context.params;
  const userId = params.userId;

  console.log("Received userId:", userId);
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const data = await prisma.db_pencapaian.findMany({
      where: {
        user_id: userId,
      },
      select: {
        node_id: true,
        status: true,
        completed_at: true,
      },
      orderBy: {
        completed_at: "desc",
      },
    });

    return NextResponse.json({ data });
  } catch (err) {
    console.error("Failed to fetch progress data:", err);
    return NextResponse.json(
      { error: "Failed to fetch progress data" },
      { status: 500 }
    );
  }
}


