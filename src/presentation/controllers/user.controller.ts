import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { CreateUserRequestDTO } from '../dtos/users/create-user.request.dto';
import { CreateUserResponseDTO } from '../dtos/users/create-user.response.dto';
import { GetUsersResponseDTO } from '../dtos/users/get-users.response.dto';
import { GetUsersUseCase } from '@/domain/usecases/get-users.usecase';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiResponse({
    status: 201,
    description: 'A new user was created successfully',
  })
  async createUser(
    @Body() user: CreateUserRequestDTO,
  ): Promise<CreateUserResponseDTO> {
    const createdUser = await this.createUserUseCase.execute({
      ...user,
      createdAt: +new Date(),
    });
    return createdUser;
  }

  @Get()
  @ApiOperation({
    summary: 'List all users created',
  })
  @ApiResponse({
    status: 200,
    description: 'A list of users was provided successfully',
  })
  async getUsers(): Promise<GetUsersResponseDTO[]> {
    return this.getUsersUseCase.execute();
  }
}
