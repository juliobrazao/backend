import { UserService } from '@/infra/providers/services/user.service';
import { CreateUserRequestDTO } from '@/presentation/dtos/users/create-user.request.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userService: UserService) {}

  async execute(user: CreateUserRequestDTO) {
    return this.userService.createUser(user);
  }
}
