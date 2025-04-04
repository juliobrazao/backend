import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { CreateUserRequestDTO } from '../dtos/users/create-user.request.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiResponse({
    status: 201,
    description: 'A new user was created successfully',
  })
  async createUser(@Body() user: CreateUserRequestDTO): Promise<any> {
    const createdUser = await this.createUserUseCase.execute(user);
    return createdUser;
  }
}
