import { Request, Response, NextFunction } from "express";
import { createUserService } from "./user.service";

export const createUserController = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data = req.body;
    const newUser = await createUserService(data);
    res.status(200).send({ success: true, data: newUser });
  } catch (error) {
    res.status(400).send({ success: false, data: error });
  }
};
