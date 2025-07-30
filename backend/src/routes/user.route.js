import express from "express";
import {
  SignUp,
  Login,
  Logout,
  ProfileUpdate,
  CheckAuth,
} from "../controllers/auth.controller.js";
import { ProtectedRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", SignUp);
router.post("/login", Login);
router.post("/logout", Logout);

router.put("/update-profile", ProtectedRoute, ProfileUpdate);
router.get("/check", ProtectedRoute, CheckAuth);

export default router;
