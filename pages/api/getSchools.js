import mysql from 'mysql2/promise';
import { config } from 'dotenv';

// Load environment variables
config();
export default async function handler(req, res) {
  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const [rows] = await db.execute('SELECT id, name, address, city, image FROM schools');
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    db.end();
  }
}
