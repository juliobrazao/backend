import { UserService } from '@/infra/providers/services/user.service';
import { GetUserResponseDTO } from '@/presentation/dtos/users/get-user.response.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetAllUsersUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(): Promise<GetUserResponseDTO[]> {
    return this.userService.getAllUsers();
  }
}
