import express from 'express';
import upload from '../utils/upload.js';
import { uploadImage, getImage } from '../controller/image-controller.js';

const router = express.Router();

router.get('/', (req, res) => { res.json("Hello") });
router.post('/upload', upload.single('file'), uploadImage);
router.get('/file/:fileId', getImage);

export default router;