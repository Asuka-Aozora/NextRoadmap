import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret_key";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const protectedRoutes = ["/dashboard", "/profile"];

  // Cek jika route termasuk protected
  if (protectedRoutes.some((route) => path.startsWith(route))) {
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    console.log("=== MIDDLEWARE DEBUG ===");
    console.log("Path:", request.nextUrl.pathname);
    console.log(
      "Token:",
      request.cookies.get("authToken")?.value?.slice(0, 20) + "..."
    );
    console.log("Verified:", jwt.verify(token, process.env.JWT_SECRET!));
    console.log("========================");

    try {
      const decoded = jwt.verify(token, JWT_SECRET) as {
        userId: number;
        username: string;
      };

      // Clone request headers
      const requestHeaders = new Headers(request.headers);

      // Tambahkan user data ke headers
      requestHeaders.set("x-user-id", decoded.userId.toString());
      requestHeaders.set("x-username", decoded.username);

      const response = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });

      return response;
    } catch (error) {
      console.error("Error verifying token:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};