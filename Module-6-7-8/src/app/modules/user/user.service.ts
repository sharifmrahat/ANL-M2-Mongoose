import User from "./user.model";

export const createUserService = async (data) => {
  const user = new User(data);
  return await user.save();
};
