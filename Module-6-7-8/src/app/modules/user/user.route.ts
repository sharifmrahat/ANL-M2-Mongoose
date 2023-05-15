import express from "express";
import { createUserController, findOneUserController, findUserByIdController, getAdminUsersController } from "./user.controller";

const router = express.Router();

router.post("/create", createUserController);

router.get("/findById/:id", findUserByIdController);

router.get("/findOne/:email", findOneUserController);


router.get("/admins", getAdminUsersController);

export default router;
