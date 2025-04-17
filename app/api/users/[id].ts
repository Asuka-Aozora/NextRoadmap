import type { NextApiRequest, NextApiResponse } from "next";
import { createConnection } from "@/lib/db";

type User = {
  id: number;
  username: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User | { message: string }>
) {
  const db = await createConnection();
  const { id } = req.query;

  if (req.method === "GET") {
    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    res.status(200).json(rows[0] as User);
  }

  if (req.method === "PUT") {
    const { username } = req.body;
    await db.query("UPDATE users SET username = ? WHERE id = ?", [
      username,
      id,
    ]);
    res.status(200).json({ id: Number(id), username });
  }

  if (req.method === "DELETE") {
    await db.query("DELETE FROM users WHERE id = ?", [id]);
    res.status(200).json({ message: "User deleted" });
  }
}

