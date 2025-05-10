import { NextResponse } from "next/server";
import { createConnection } from "@/app/lib/db";
import bcrypt from "bcrypt";
import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, { message: "Password minimal 8 karakter" })
  .regex(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    {
      message:
        "Password harus mengandung huruf besar, kecil, angka, dan special character",
    }
  );

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // 1) Validasi required
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: "Username dan password wajib diisi" },
        { status: 400 }
      );
    }

    // 2) Validasi format password
    const valid = passwordSchema.safeParse(password);
    if (!valid.success) {
      return NextResponse.json(
        { success: false, error: valid.error.errors[0].message },
        { status: 400 }
      );
    }

    // 3) Cek username sudah ada
    const conn = await createConnection();
    const [rows] = await conn.query(
      "SELECT id FROM db_user WHERE username = ?",
      [username]
    );
    if (Array.isArray(rows) && (rows as any[]).length > 0) {
      return NextResponse.json(
        { success: false, error: "Username sudah terdaftar" },
        { status: 409 }
      );
    }

    // 4) Hash password & simpan
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    await conn.query("INSERT INTO db_user (username, password) VALUES (?, ?)", [
      username,
      hashed,
    ]);

    return NextResponse.json(
      { success: true, message: "User berhasil didaftarkan" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { success: false, error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}
