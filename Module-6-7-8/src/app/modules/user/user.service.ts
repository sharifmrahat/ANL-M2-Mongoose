import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserService = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); //user is an instance a
  // console.log(user.fullName())  //custom method
  return await user.save();  //save is a method of user instance
};

export const findUserByIdService = async (_id: string): Promise<IUser | null> => {
  return await User.findById({_id})
}

export const findOneUserService = async (payload: string): Promise<IUser | null> => {
  console.log(payload)
  return await User.findOne({email: payload}, {name: 1, email: 1, role: 1})
}


export const getAdminUsersService = async () => {
  const admins = User.getAdminUsers() //custom static method
  return admins
}