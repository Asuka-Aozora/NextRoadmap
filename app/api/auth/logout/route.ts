import { NextResponse } from "next/server";

export async function POST() {
  try {
    // untuk menghapus token di dengan postman
    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
