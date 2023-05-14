import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserService = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload);
  return await user.save();
};
