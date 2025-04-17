import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

let connection: mysql.Connection | undefined;
export const createConnection = async () => {
    if (!connection) {
        connection = await mysql.createConnection({
          host: process.env.DATABASE_HOST,
          user: process.env.DATABASE_USER,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_NAME, 
          waitForConnections: true,
          connectionLimit: 10,
        });
    }
    return connection;
}

// const pool = mysql.createPool({
//   host: "localhost",
//   user: "root", 
//   password: "",
//   database: "my_app_db",
//   waitForConnections: true,
//   connectionLimit: 10,
// });

// export default pool;
