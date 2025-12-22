import admin from "../database/firebase.js";
import User from "../models/userModel.js";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
    });

    const user = await User.create({
      username: userRecord.displayName,
      email: userRecord.email,
      role: "user",
    });

    res.status(201).json({ message: "Register Success...", data: user });
  } catch (err) {
    console.error("Register error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const login = async (_req, res) => {
  res.status(200).json({ message: "Firebase handles login via client SDK" });
};

export const getUser = async (req, res) => {
  const { uid } = req.user;
  try {
    const userRecord = await admin.auth().getUser(uid);
    res.status(200).json({ data: userRecord });
  } catch (err) {
    console.error("Register error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
