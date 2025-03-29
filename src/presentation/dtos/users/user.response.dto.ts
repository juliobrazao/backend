import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDTO {
  @ApiProperty({
    description: 'Database unique ID',
    example: '1',
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
    description: 'User creation date',
    example: new Date().toISOString(),
  })
  createdAt: Date;
}
