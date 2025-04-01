import { CreateUserRequestDTO } from '@/presentation/dtos/users/create-user.request.dto';
import { GetUserResponseDTO } from '@/presentation/dtos/users/get-user.response.dto';

export class UserService {
  users: GetUserResponseDTO[] = [];

  async createUser(user: CreateUserRequestDTO): Promise<GetUserResponseDTO> {
    const createdUser: GetUserResponseDTO = {
      ...user,
      createdAt: new Date().getTime(),
    };
    this.users.push(createdUser);
    return createdUser;
  }

  async getAllUsers(): Promise<GetUserResponseDTO[]> {
    return this.users;
  }

  async getUserById(userId: string): Promise<GetUserResponseDTO> {
    return this.users.filter((user) => user.userId === userId)[0];
  }
}
