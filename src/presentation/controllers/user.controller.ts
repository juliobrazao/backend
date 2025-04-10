import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserRequestDTO } from '@/presentation/dtos/users/create-user.request.dto';
import { CreateUserResponseDTO } from '@/presentation/dtos/users/create-user.response.dto';
import { GetUsersResponseDTO } from '@/presentation/dtos/users/get-users.response.dto';
import { GetUserByIdResponseDTO } from '@/presentation/dtos/users/get-user-by-id.response.dto';
import { GetUserByIdRequestDTO } from '@/presentation/dtos/users/get-user-by-id.request.dto';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { GetUsersUseCase } from '@/domain/usecases/get-users.usecase';
import { GetUserByIdUseCase } from '@/domain/usecases/get-user-by-id.usecase';
import { UpdateUserRequestDTO } from '@/presentation/dtos/users/update-user.request.dto';
import { UpdateUserUseCase } from '@/domain/usecases/update-user.usecase';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getUsersUseCase: GetUsersUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
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
    @Param() id: GetUserByIdRequestDTO,
  ): Promise<GetUserByIdResponseDTO> {
    return this.getUserByIdUseCase.execute(id);
  }

  @Patch(':userId')
  @ApiOperation({
    summary: 'Updates a user with new information',
  })
  @ApiResponse({
    status: 200,
    description: 'Updated user was found and provided successfully',
  })
  async updateUser(
    @Param('userId') userId: string,
    @Body() updatedInfo: UpdateUserRequestDTO,
  ) {
    return this.updateUserUseCase.execute(userId, updatedInfo);
  }
}
