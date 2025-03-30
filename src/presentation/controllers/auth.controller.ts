import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  @Get('callback')
  @UseGuards(AuthGuard('keycloak'))
  async callback(@Req() req: any, @Res() res: Response) {
    const user = req.user;

    const accessToken = user.access_token;

    res.cookie('access_token', accessToken, { httpOnly: true });

    res.redirect('http://localhost:3002/user/all');
  }
}
