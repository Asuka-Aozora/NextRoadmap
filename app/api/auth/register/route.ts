
import { NextResponse } from "next/server";
import { createConnection } from "@/app/lib/db";
import bcrypt from "bcrypt";
import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, {
    message: "Password must be at least 8 characters long",
  })
  .regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
    message:
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character",
  });

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Validasi input
    if (!username || !password) {
      return NextResponse.json(
        { error: "Username and password are required" },
        { status: 400 }
      );
    }

    // Validasi password menggunakan schema
    const passwordValidation = passwordSchema.safeParse(password);
    if (!passwordValidation.success) {
      return NextResponse.json(
        {
          error:
            passwordValidation.error.errors[0]?.message ||
            "Invalid password format",
        },
        { status: 400 }
      );
    }

    // Cek username sudah ada
    const connection = await createConnection();
    const [existingUser] = await connection.query(
      "SELECT * FROM db_user WHERE username = ?",
      [username]
    );
    if (Array.isArray(existingUser) && existingUser.length > 0) {
      return NextResponse.json(
        { error: "Username already exists" },
        { status: 409 }
      );
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Simpan ke database

    await connection.query(
      "INSERT INTO db_user (username, password) VALUES (?, ?)",
      [username, hashedPassword]
    );

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
