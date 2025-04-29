import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { createConnection } from "@/app/lib/db";
// import { setCookie } from "cookies-next";

type User = {
  id: number;
  username: string;
  password: string;
};

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

export async function POST(request: Request) {
  const body = await request.json();

  // Validasi input
  if (!body.username || !body.password) {
    return NextResponse.json(
      { error: "Username dan password wajib diisi" },
      { status: 400 }
    );
  }

  try {
    // Cari user
    const pool = await createConnection();
    const [users] = await pool.query(
      "SELECT * FROM db_user WHERE username = ?",
      [body.username]
    );
    const user = (users as User[])[0];
    if (!user) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Cek user dan password
    if (!user || !(await bcrypt.compare(body.password, user.password))) {
      return NextResponse.json(
        { error: "Username atau password salah" },
        { status: 401 }
      );
    }

    // Buat JWT token
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Set cookie
    const response = NextResponse.json({
      message: "Login berhasil",
      user: { id: user.id, username: user.username },
    });

    response.cookies.set({
      name: "authToken",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
      path: "/",
    });
    
    response.cookies.set("x-user-id", user.id.toString(), {
      maxAge: 60 * 60 * 24,
      path: "/",
    });

    response.cookies.set("x-username", user.username, {
      maxAge: 60 * 60 * 24,
      path: "/",
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Terjadi kesalahan server" },
      { status: 500 }
    );
  }
}

// import { NextResponse } from "next/server";
// import { createConnection } from "@/app/lib/db";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

// type User = {
//   id: number;
//   username: string;
//   password: string;
// };

// export async function POST(request: Request) {
//   try {
//     const { username, password } = await request.json(); // terima data login dari client

//     // Cari user
//     const pool = await createConnection(); // hubungkan ke database
//     const [users] = await pool.query(
//       "SELECT * FROM db_user WHERE username = ?",
//       [username]
//     );
//     const user = (users as User[])[0];
//     if (!user) {
//       return NextResponse.json(
//         { error: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     // Validasi Input
//     if (!username || !password || password.length < 6) {
//       return NextResponse.json({ error: "Invalid input" }, { status: 400 });
//     }

//     // Verifikasi password
//     const validPassword = await bcrypt.compare(password, user.password); // bandingkaan password yg dikirim dgn hash di database
//     if (!validPassword) {
//       return NextResponse.json(
//         { error: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     // Buat JWT token
//     const token = jwt.sign(
//       { userId: user.id, username: user.username },
//       process.env.JWT_SECRET || "default-secret-key",
//       { expiresIn: "1h" }
//     );

//     return NextResponse.json({ token }, { status: 200 }); // sukses
//   } catch (error) {
//     console.error("Login error:", error);
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }
