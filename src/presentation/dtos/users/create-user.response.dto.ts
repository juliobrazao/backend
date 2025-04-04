import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponseDTO {
  @ApiProperty({
    description: 'Unique user identification using UUID',
    example: '8d208544-bfa9-455b-ad1d-2101be17d7b1',
  })
  id: string;

  @ApiProperty({
    description: 'User ID',
    example: 'john.doe',
  })
  userId: string;

  @ApiProperty({
    description: 'User full name',
    example: 'John Smith Doe',
  })
  name: string;

  @ApiProperty({
    description: 'User email',
    example: 'john.doe@email.com',
  })
  email: string;

  @ApiProperty({
    description: 'Definition of an admin user or not',
    example: true,
  })
  isAdmin: boolean;

  @ApiProperty({
    description: 'Definition of an user if it is active or not',
    example: true,
  })
  isActive: boolean;
}
