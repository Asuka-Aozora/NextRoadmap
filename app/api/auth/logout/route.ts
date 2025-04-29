import { NextResponse } from "next/server";
import { deleteCookie } from "cookies-next/client";

export async function POST() {
  const response = NextResponse.json({ message: "Logout berhasil" });
  deleteCookie("authToken", { response });
  return response;
}
