import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserResponseDTO } from '@/presentation/dtos/users/user.response.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserRequestDTO } from '@/presentation/dtos/users/create-user.request.dto';
import { KeycloakGuard } from '@/infra/auth/keycloak.guard';
import { Roles } from '@/infra/auth/roles.decorator';

@ApiTags('Users')
@Controller('user')
export class UserController {
  @Get('all')
  @UseGuards(KeycloakGuard)
  @Roles('god-mode')
  @ApiOperation({
    summary: 'List all users',
  })
  @ApiResponse({
    status: 200,
    description: 'Users list fetched successfully',
    type: [UserResponseDTO],
  })
  async getUsers(): Promise<Partial<UserResponseDTO[]>> {
    return [{}] as Partial<UserResponseDTO[]>;
  }

  @Get(':id')
  @ApiOperation({
    summary: 'Get a specific user by ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Specific user fetched successfully',
    type: UserResponseDTO,
  })
  async getUserById(@Param() id: string): Promise<Partial<UserResponseDTO>> {
    return {} as Partial<UserResponseDTO>;
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
  })
  @ApiResponse({
    status: 201,
    description: 'A new user was created successfully',
    type: UserResponseDTO,
  })
  async createUser(
    @Body() user: CreateUserRequestDTO,
  ): Promise<Partial<UserResponseDTO>> {
    return user as Partial<UserResponseDTO>;
  }
}
