import prisma from "../database/dbConfig.js";
import admin from "../database/firebase.js";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Token tidak ditemukan atau format salah.",
      });
    }

    const token = authHeader.split(" ")[1];
    const decodedToken = await admin.auth().verifyIdToken(token);
    const userDb = await prisma.user.findUnique({
      where: { email: decodedToken.email },
    });
    req.user = decodedToken;
    req.userDb = userDb;
    next();
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Token tidak valid." });
    }
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token kadaluarsa." });
    }
    return res
      .status(500)
      .json({ message: "Terjadi kesalahan server saat autentikasi." });
  }
};
