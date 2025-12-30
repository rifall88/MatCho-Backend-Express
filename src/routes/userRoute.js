import express from "express";
import {
  register,
  login,
  getUserAll,
  getUserById,
  deleteUser,
  updateUser,
  getUser,
} from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/all", authenticate, getUserAll);
router.get("/by-id/:id", authenticate, getUserById);
router.put("/by-id/:id", authenticate, updateUser);
router.delete("/by-id/:id", authenticate, deleteUser);
router.get("/", authenticate, getUser);

export default router;
