import { Request, Response, NextFunction } from "express";
import { createUserService, findOneUserService, findUserByIdService, getAdminUsersService } from "./user.service";

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
    res.status(400).send({ success: false, error: error });
  }
};

export const findUserByIdController = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id;
    const user = await findUserByIdService(id);
    res.status(200).send({ success: true, data: user });
  } catch (error) {
    res.status(400).send({ success: false, error: error });
  }
};


export const findOneUserController = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {email} = req.params;
    const user = await findOneUserService(email);
    res.status(200).send({ success: true, data: user });
  } catch (error) {
    res.status(400).send({ success: false, error: error });
  }
};


export const getAdminUsersController = async(
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await getAdminUsersService();
    res.status(200).send({ success: true, data: users });
  } catch (error) {
    res.status(400).send({ success: false, error: error });
  }
};