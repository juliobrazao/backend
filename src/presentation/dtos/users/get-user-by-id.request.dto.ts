import { ApiProperty } from '@nestjs/swagger';

export class GetUserByIdRequestDTO {
  @ApiProperty({
    description: 'User ID',
    example: '44ac216c-80a1-4a7e-b080-fa2ef3a834d5',
  })
  id: string;
}
