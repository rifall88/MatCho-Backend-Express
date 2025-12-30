import { json } from "express";
import admin from "../database/firebase.js";
import User from "../models/userModel.js";

export const register = async (req, res) => {
  const { email, password, displayName } = req.body;
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
      deleted_at: null,
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

export const getUserAll = async (_req, res) => {
  try {
    const userData = await User.findAll();
    res.status(200).json(userData);
  } catch (err) {
    console.error("Error getting users:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userData = await User.findById(id);
    if (!userData) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res.status(200).json(userData);
  } catch (err) {
    console.error("Error getting user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, phone, role } = req.body;
  try {
    const userData = {
      name,
      phone,
      role,
      is_update: true,
    };
    const updateUser = await User.update(id, userData);

    if (!updateUser) {
      return res.status(404), json({ message: "User tidak ditemukan" });
    }

    res
      .status(200)
      .json({ message: "User berhasil diperbarui", data: updateUser });
  } catch (err) {
    console.error("Error updating user", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const softdelte = await User.softdelete(id);

    if (!softdelte) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }

    res.status(200).json({ message: "User berhasil dihapus" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getUser = async (req, res) => {
  const { uid } = req.user;
  try {
    const userRecord = await admin.auth().getUser(uid);
    res.status(200).json({ data: userRecord });
  } catch (err) {
    console.error("Getting user error:", err.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
