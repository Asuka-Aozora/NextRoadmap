import type { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "@/lib/db";
import mysql from "mysql2/promise";


type User = {
  id: number;
  username: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[] | User>
) {
console.log("Request received:", req.method);

  if (req.method === "GET") {
    const db = await createConnection();
    const [rows] = await db.query("SELECT * FROM db_user");
    res.status(200).json(rows as User[]);
  }

  if (req.method === "POST") {
    const { username } = req.body;
    const db = await createConnection();
    const [{ insertId }] = await db.query<mysql.OkPacket>(
      "INSERT INTO db_user (username) VALUES (?)",
      [username]
    );
    res.status(201).json({ id: insertId, username });
  }
}
