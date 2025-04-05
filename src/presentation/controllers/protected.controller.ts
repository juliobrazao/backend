import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('protected')
export class ProtectedController {
  @UseGuards(AuthGuard('keycloak'))
  @Get('protected')
  getProtected(@Req() user): { message: string; user: any } {
    return { message: 'Protected route!', user };
  }
}
