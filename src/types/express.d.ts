import { KeycloakProfile } from 'passport-keycloak-oauth2-oidc';

declare global {
  namespace Express {
    interface User extends KeycloakProfile {}

    interface Request {
      user?: User;
      logout(callback: (err: any) => void): void;
    }
  }
}
