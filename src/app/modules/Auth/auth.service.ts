import { IUser } from './auth.interface';
import bcrypt from 'bcrypt';
import { User } from './auth.model';

const registerUser = async (payload: IUser) => {
  const password = await bcrypt.hash(payload.password, 10);

  const userData = {
    ...payload,
    password,
  };
  // console.log(userData);
  const result = await User.create(userData);
  return result;
};

export const AuthServices = {
  registerUser,
};
