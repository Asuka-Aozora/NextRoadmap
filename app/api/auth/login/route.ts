import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createConnection } from "@/app/lib/db";

type User = {
  id: number;
  username: string;
  password: string;
};

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // 1) Client‑side validation
  if (!username || !password) {
    return NextResponse.json(
      { success: false, error: "Username dan password wajib diisi" },
      { status: 400 }
    );
  }

  try {
    // 2) Cari user di database
    const pool = await createConnection();
    const [rows] = await pool.query(
      "SELECT * FROM db_user WHERE username = ?",
      [username]
    );
    const user = (rows as User[])[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json(
        { success: false, error: "Username atau password salah" },
        { status: 401 }
      );
    }

    // 3) Generate JWT
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    // 4) Kirim response dengan cookies + standard body
    const response = NextResponse.json(
      {
        success: true,
        message: "Login berhasil",
        data: { user: { id: user.id, username: user.username } },
      },
      { status: 200 }
    );

    response.cookies.set({
      name: "authToken",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      path: "/",
    });
    response.cookies.set("x-user-id", String(user.id), {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    response.cookies.set("x-username", user.username, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    return response;
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
