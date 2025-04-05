import { ApiProperty } from '@nestjs/swagger';

export class GetUserByIdRequestDTO {
  @ApiProperty({
    description: 'User ID',
    example: 'john.doe',
  })
  userId: string;
}
