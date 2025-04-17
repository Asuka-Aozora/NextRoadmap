import { createConnection } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const db = await createConnection();
        const sql = 'SELECT * FROM db_materi';
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
        const body = await request.json();
        const { user_id, materi } = body;

        if (!user_id || !materi) {
            return NextResponse.json({ error: "Missing user_id or materi" }, { status: 400 });
        }

        const sql = 'INSERT INTO db_materi (user_id, materi) VALUES (?, ?)';
        const [result] = await db.query(sql, [user_id, materi]);

        return NextResponse.json({
            message: "Data berhasil ditambahkan",
            data: result
        }, { status: 201 });

    } catch (error: unknown) {
        console.error(error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}


