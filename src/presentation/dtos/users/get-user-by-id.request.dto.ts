import { ApiProperty } from '@nestjs/swagger';

export class GetUserByIdRequestDTO {
  @ApiProperty({
    description: 'User ID',
    example: '343225253532',
  })
  id: string;
}
