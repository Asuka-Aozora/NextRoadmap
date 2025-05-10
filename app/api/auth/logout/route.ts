import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { success: true, message: "Logout berhasil" },
    { status: 200 }
  );
  // Hapus cookie dengan API NextResponse
  response.cookies.set("authToken", "", { maxAge: 0, path: "/" });
  response.cookies.set("x-user-id", "", { maxAge: 0, path: "/" });
  response.cookies.set("x-username", "", { maxAge: 0, path: "/" });
  return response;
}
