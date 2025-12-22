import admin from "firebase-admin";
import serviceAccount from "../serviceAccount/firebaseServiceAccount.json" assert { type: "json" };
import dotenv from "dotenv";

dotenv.config();

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin;
