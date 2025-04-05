import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { CreateUserRequestDTO } from '../dtos/users/create-user.request.dto';
import { CreateUserResponseDTO } from '../dtos/users/create-user.response.dto';
import { GetUsersResponseDTO } from '../dtos/users/get-users.response.dto';
import { GetUsersUseCase } from '@/domain/usecases/get-users.usecase';
import { GetUserByIdResponseDTO } from '../dtos/users/get-user-by-id.response.dto';
import { GetUserByIdUseCase } from '@/domain/usecases/get-user-by-id.usecase';
import { GetUserByIdRequestDTO } from '../dtos/users/get-user-by-id.request.dto';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
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

  @Get(':userId')
  @ApiOperation({
    summary: 'List a specific user filtered by userID',
  })
  @ApiResponse({
    status: 200,
    description: 'A filtered user was found and provided successfully',
  })
  async getUserById(
    @Param() userId: GetUserByIdRequestDTO,
  ): Promise<GetUserByIdResponseDTO> {
    return this.getUserByIdUseCase.execute(userId);
  }
}
