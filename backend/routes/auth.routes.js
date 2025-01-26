import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";
import { deleteAccount } from "../controllers/auth.controller.js";


const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.delete("/delete-account", deleteAccount);


export default router;
