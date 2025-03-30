import { UserMongoRepository } from '@/infra/repositories/user-mongo.repository';
import { CreateUserRequestDTO } from '@/presentation/dtos/users/create-user.request.dto';
import { Injectable } from '@nestjs/common';
import { UserMongoEntity } from '../entities/user-mongo.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserMongoRepository) {}

  async execute(createUserDTO: CreateUserRequestDTO): Promise<UserMongoEntity> {
    const user = new UserMongoEntity(
      createUserDTO.userId,
      createUserDTO.name,
      createUserDTO.email,
      createUserDTO.isAdmin,
      new Date(),
    );

    return await this.userRepository.create(user);
  }
}
