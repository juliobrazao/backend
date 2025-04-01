import { UserService } from '@/infra/providers/services/user.service';
import { GetUserResponseDTO } from '@/presentation/dtos/users/get-user.response.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GetUserByIdUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(userId: string): Promise<GetUserResponseDTO> {
    return this.userService.getUserById(userId);
  }
}
