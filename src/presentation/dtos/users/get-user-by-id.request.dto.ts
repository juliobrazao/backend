import { ApiProperty } from '@nestjs/swagger';

export class GetUserByIdRequestDTO {
  @ApiProperty({
    description: 'id',
    example: '44ac216c-80a1-4a7e-b080-fa2ef3a834d5',
  })
  id: string;
}
