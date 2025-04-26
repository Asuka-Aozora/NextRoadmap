import { NextResponse } from "next/server";
import { createConnection } from "@/lib/db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

type User = {
  id: number;
  username: string;
  password: string;
};

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();// terima data login dari client

    // Cari user
    const pool = await createConnection();// hubungkan ke database
    const [users] = await pool.query(
      "SELECT * FROM db_user WHERE username = ?",
      [username]
    );
    const user = (users as User[])[0];
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Validasi Input
    if (!username || !password || password.length < 6) {
      return NextResponse.json({ error: "Invalid input" }, { status: 400 });
    }

    // Verifikasi password
    const validPassword = await bcrypt.compare(password, user.password);// bandingkaan password yg dikirim dgn hash di database
    if (!validPassword) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Buat JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET || "default-secret-key",
      { expiresIn: "1h" }
    );

    return NextResponse.json({ token }, { status: 200 }); // sukses
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
