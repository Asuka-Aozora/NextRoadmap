import { NextResponse } from "next/server";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

export async function GET(request: Request) {
  const token = request.cookies.get("token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    if (decoded.exp * 1000 < Date.now()) {
      return NextResponse.json({ error: "Token expired" }, { status: 401 });
    }

    const user = await getUserFromToken(decoded);

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error decoding token:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

async function getUserFromToken(decoded: DecodedToken) {
  // Implement your logic to get the user from the decoded token
  // For example:
  const response = await fetch(`https://example.com/api/user/${decoded.userId}`);
  const user = await response.json();

  return user;
}

