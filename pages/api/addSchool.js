import mysql from 'mysql2/promise';
import { config } from 'dotenv';

// Load environment variables
config();

const addSchool = async (req, res) => {
  if (req.method === 'POST') {
    const { name, address, city, state, contact, image, email_id } = req.body;

    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    try {
      const query = `INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)`;
      await connection.execute(query, [name, address, city, state, contact, image, email_id]);

      res.status(200).json({ message: 'School added successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    } finally {
      await connection.end();
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
};

export default addSchool;
