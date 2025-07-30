import express from "express";
import { ProtectedRoute } from "../middleware/auth.middleware.js";
import {
  getUsersSidebar,
  getMessages,
  sendMessages,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", ProtectedRoute, getUsersSidebar);
router.get("/:id", ProtectedRoute, getMessages);
router.post("/send/:id", ProtectedRoute, sendMessages);

export default router;
