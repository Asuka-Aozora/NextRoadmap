import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  try {
    if (!token) {
      return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
    }

    const user = jwt.verify(token, process.env.JWT_SECRET || "default-secret-key") as {
      userId: number;
      username: string;
    };

    return NextResponse.json({ userId: user.userId, username: user.username });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
