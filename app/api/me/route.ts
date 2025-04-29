// app/api/me/route.ts
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { prisma } from "@/app/lib/prisma";


const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

export async function GET() {
  try {
    // Ambil token dari cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Verifikasi token
    const decoded = jwt.verify(token, JWT_SECRET) as { id: number };

    // Cari user di database
    const user = await prisma.db_user.findUnique({
      where: { id: decoded.id },
      select: {
        id: true,
        username: true,
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "User tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { user },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  } catch (error) {
    console.error("Error in /api/me:", error);

    if (error instanceof jwt.JsonWebTokenError) {
      return NextResponse.json(
        { message: "Token tidak valid" },
        { status: 401 }
      );
    }

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
