import express from "express";
import multer from "multer";
import { createProduct } from "../controllers/productController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, "uploads/"),
  filename: (_req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });
const router = express.Router();

router.post("/", authenticate, upload.single("image_url"), createProduct);

export default router;
