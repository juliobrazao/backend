import { UserRepository } from '@/infra/repositories/user-mongo.repository';
import { CreateUserRequestDTO } from '@/presentation/dtos/users/create-user.request.dto';
import { Injectable } from '@nestjs/common';
import { UserEntity } from '../entities/user-mongo.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(createUserDTO: CreateUserRequestDTO): Promise<UserEntity> {
    const user = new UserEntity(
      createUserDTO.userId,
      createUserDTO.name,
      createUserDTO.email,
      createUserDTO.isAdmin,
      new Date(),
    );

    return await this.userRepository.create(user);
  }
}
