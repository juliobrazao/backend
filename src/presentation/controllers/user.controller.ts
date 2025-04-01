import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserUseCase } from '@/domain/usecases/create-user.usecase';
import { CreateUserRequestDTO } from '../dtos/users/create-user.request.dto';
import { GetUserResponseDTO } from '../dtos/users/get-user.response.dto';
import { GetAllUsersUseCase } from '@/domain/usecases/get-all-users.usecase';
import { GetUserByIdUseCase } from '@/domain/usecases/get-user-by-id.usecase';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly getAllUsersUseCase: GetAllUsersUseCase,
    private readonly getUserByIdUseCase: GetUserByIdUseCase,
  ) {}

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiResponse({
    status: 201,
    description: 'A new user was created successfully',
    type: GetUserResponseDTO,
  })
  async createUser(
    @Body() user: CreateUserRequestDTO,
  ): Promise<GetUserResponseDTO> {
    const createdUser = await this.createUserUseCase.execute(user);
    return createdUser;
  }

  @Get()
  @ApiOperation({
    summary: 'List all users',
  })
  @ApiResponse({
    status: 200,
    description: 'Users list fetched successfully',
    type: [GetUserResponseDTO],
  })
  async getUsers(): Promise<GetUserResponseDTO[]> {
    return this.getAllUsersUseCase.execute();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a user by specif ID',
  })
  @ApiResponse({
    status: 200,
    description: 'User identified by ID passed via params',
    type: GetUserResponseDTO,
  })
  async getUser(@Param('id') userId: string): Promise<GetUserResponseDTO> {
    return this.getUserByIdUseCase.execute(userId);
  }
}
