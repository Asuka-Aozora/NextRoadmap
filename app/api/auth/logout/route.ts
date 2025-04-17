import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Hapus token dari client (contoh dengan mengembalikan token kosong)
    return NextResponse.json({ message: "Logout successful" }, { status: 200 });
  } catch (error) {
    console.error("Logout error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
