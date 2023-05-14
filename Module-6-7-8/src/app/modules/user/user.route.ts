import express from "express";
import { createUserController } from "./user.controller";

const router = express.Router();

router.post("/create", createUserController);

export default router;
