import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-keycloak-oauth2-oidc';

@Injectable()
export class KeycloakStrategy extends PassportStrategy(Strategy, 'keycloak') {
  constructor(configService: ConfigService) {
    const clientID = configService.get<string>('KEYCLOAK_CLIENT_ID');
    const clientSecret = configService.get<string>('KEYCLOAK_CLIENT_SECRET');
    const realm = configService.get<string>('KEYCLOAK_REALM');
    const authServerURL = configService.get<string>('KEYCLOAK_SERVER_URL');
    const callbackURL = configService.get<string>('KEYCLOAK_REDIRECT_URI');

    super({
      clientID,
      clientSecret,
      callbackURL,
      authServerURL: `${authServerURL}/realms/${realm}/protocol/openid-connect/auth`,
      tokenURL: `${authServerURL}/realms/${realm}/protocol/openid-connect/token`,
      userInfoURL: `${authServerURL}/realms/${realm}/protocol/openid-connect/userinfo`,
    });
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: Function,
  ) {
    done(null, profile);
  }
}
