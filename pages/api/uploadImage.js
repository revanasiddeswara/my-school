import multer from 'multer';
import path from 'path';
import nextConnect from 'next-connect';
// Set up storage configuration for multer
const storage = multer.diskStorage({
  destination: '../../public/schoolImages',
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `Something went wrong! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

// Handle multipart/form-data for file upload
apiRoute.use(upload.single('image'));

apiRoute.post((req, res) => {
  res.status(200).json({ imageUrl: `/schoolImages/${req.file.filename}` });
});

export default apiRoute;

export const config = {
  api: {
    bodyParser: false,
  },
};
