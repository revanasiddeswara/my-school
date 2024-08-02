const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use('/schoolImages', express.static(path.join(__dirname, '../public/schoolImages')));

// Database connection
const db = mysql.createConnection({
  uri: process.env.DATABASE_URL
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Database connected.');
  }
});

// Multer setup for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../public/schoolImages');
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + path.extname(file.originalname);
    cb(null, filename);
  },
});
const upload = multer({ storage });

app.use((req, res, next) => {
  console.log('Received request:', req.method, req.url);
  next();
});

// Routes
app.post('/api/addSchool', upload.single('image'), (req, res) => {
  console.log('Received POST request to /api/addSchool');
  console.log('Request Body:', req.body);
  console.log('Uploaded File:', req.file);

  const { name, address, city, state, contact, email_id } = req.body;
  const image = req.file ? `/schoolImages/${req.file.filename}` : '';

  console.log('Image path to be saved:', image);

  const query = 'INSERT INTO schools (name, address, city, state, contact, image, email_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(query, [name, address, city, state, contact, image, email_id], (err, result) => {
    if (err) {
      console.error('Database insert error:', err);
      res.status(500).json({ error: err.message });
    } else {
      console.log('Database insert success:', result);
      res.status(200).json({ message: 'School added successfully', id: result.insertId });
    }
  });
});

app.get('/api/getSchools', (req, res) => {
  console.log('Received GET request to /api/getSchools');
  const query = 'SELECT id, name, address, city, image FROM schools';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      res.status(500).json({ error: err.message });
    } else {
      console.log('Database query success:', results);
      res.status(200).json(results);
    }
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
