import express from "express";
import { register, login, getUser } from "../controllers/userController.js";
import { authenticate } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/user", authenticate, getUser);

export default router;
