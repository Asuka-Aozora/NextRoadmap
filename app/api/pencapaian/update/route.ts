import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";



export async function POST(req: Request) {
  const { userId, nodeId, status } = await req.json();

  try {
    const updated = await prisma.db_pencapaian.upsert({
      where: {
        user_id_node_id: { user_id: userId, node_id: nodeId },
      },
      update: {
        status,
        completed_at: status === "DONE" ? new Date() : null,
      },
      create: {
        user_id: userId,
        node_id: nodeId,
        status,
        completed_at: status === "DONE" ? new Date() : null,
      },
    });

    return NextResponse.json({ success: true, updated });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: "Failed to update status" },
      { status: 500 }
    );
  }
}
