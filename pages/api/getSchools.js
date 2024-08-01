import mysql from 'mysql2/promise';

export default async function handler(req, res) {
  const db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Siddu12345',
    database: 'schoolDB',
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
