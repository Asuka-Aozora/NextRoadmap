import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await createConnection();
        const sql = 'SELECT * FROM db_user';
        const [rows] = await db.query(sql);
        return NextResponse.json(rows);
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.log(error);
            return NextResponse.json({ error: error.message });
        } else {
            console.log('An unknown error occurred');
            return NextResponse.json({ error: 'An unknown error occurred' });
        }
    }
}


export async function POST(request: Request) {
  try {
    const db = await createConnection();
    const { username } = await request.json();
    const sql = "INSERT INTO db_user (username) VALUES (?)";
    const [result] = await db.query(sql, [username]);
    return NextResponse.json({
      message: "Data berhasil di tambahkan",
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      console.log("An unknown error occurred");
      return NextResponse.json(
        { error: "An unknown error occurred" },
        { status: 404 }
      );
    }
  }
}
