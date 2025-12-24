import express from "express";
import {
  register,
  login,
  getUserAll,
  getUserById,
  getUser,
} from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/all", getUserAll);
router.get("/by-id/:id", getUserById);
router.get("/", authenticate, getUser);

export default router;
