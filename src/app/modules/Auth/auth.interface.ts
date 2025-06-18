export type UserRole = 'student' | 'teacher';

export interface IUser {
  name: string;
  email: string;
  password: string;
  role: UserRole;
}
export type ILoginUser = {
  email: string;
  password: string;
};