import express from "express";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
import admin from "firebase-admin";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

app.get("/", (_req, res) => {
  res.send("Welcome to the MatCho API!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server ready on http://localhost:${port}`);
});
