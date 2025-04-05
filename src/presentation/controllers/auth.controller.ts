import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly configService: ConfigService) {}

  @Get('login')
  @UseGuards(AuthGuard('keycloak'))
  login() {}

  @Get('callback')
  async callback(@Req() req: Request, @Res() res: Response) {
    const user = req.user;

    return res.json({
      message: 'Logged in successfully',
      user,
    });
  }

  @Get('logout')
  logout(@Req() req: Request, @Res() res: Response) {
    const keycloakBaseUrl = this.configService.get<string>(
      'KEYCLOAK_AUTH_SERVER_URL',
    );
    const realm = this.configService.get<string>('KEYCLOAK_REALM');

    const redirectUri = 'http://localhost:3000';

    req.logout(() => {
      res.redirect(
        `${keycloakBaseUrl}/realms/${realm}/protocol/openid-connect/logout?redirect_uri=${encodeURIComponent(redirectUri)}`,
      );
    });
  }
}
