import jwt from "jsonwebtoken";
import { prisma } from "../prisma";
import { cookies } from "next/headers";

interface JwtPayload {
  userId: string;
  username: string;
  exp: number;
}

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    if (!token) return null;

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET environment variable is not set");
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    // Muat user dari database
    const user = await prisma.db_user.findUnique({
      where: { id: payload.userId },
      select: { id: true, username: true },
    });

    return user;
  } catch (e) {
    console.error("[getCurrentUser]", e);
    return null;
  }
}
