export default interface CreateUserParams {
  userId: string;
  name: string;
  email: string;
  createdAt: number;
  isAdmin: boolean;
  isActive: boolean;
}
