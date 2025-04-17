import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";


export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  try {
    if (!token) throw new Error("No token");
    jwt.verify(token, process.env.JWT_SECRET || "default-secret-key");
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
