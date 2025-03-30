import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-keycloak-oauth2-oidc';

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy) {
  constructor(configService: ConfigService) {
    const clientID = configService.get<string>('KEYCLOAK_CLIENT_ID');
    const clientSecret = configService.get<string>('KEYCLOAK_CLIENT_SECRET');
    const realm = configService.get<string>('KEYCLOAK_REALM');
    const authServerURL = configService.get<string>('KEYCLOAK_SERVER_URL');
    const callbackURL = configService.get<string>('KEYCLOAK_REDIRECT_URI');

    super({
      clientID,
      clientSecret,
      realm,
      authServerURL,
      callbackURL,
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.preferred_username };
  }
}
