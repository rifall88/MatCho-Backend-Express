import admin from "../database/firebase.js";

export const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      message: "Token tidak ditemukan atau format salah.",
    });
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Terjadi kesalahan server saat autentikasi." });
  }
};
