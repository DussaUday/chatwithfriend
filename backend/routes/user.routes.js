import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";
import { getUserProfile } from "../controllers/auth.controller.js";
import { deleteAccount } from "../controllers/auth.controller.js"; 

const router = express.Router();

router.get("/", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getUserProfile);
router.delete("/account/delete", protectRoute, deleteAccount);

export default router;
