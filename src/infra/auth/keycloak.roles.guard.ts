import { Reflector } from '@nestjs/core';
import { KeycloakGuard } from './keycloak.guard';
import { ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

export class KeycloakRolesGuard extends KeycloakGuard {
  constructor(private readonly reflector: Reflector) {
    super();
  }

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<string[]>(
      'roles',
      context.getHandler(),
    );

    if (!requiredRoles) {
      return super.canActivate(context);
    }

    const user = context.switchToHttp().getRequest().user;
    return (
      requiredRoles.some((role) => user.roles?.includes(role)) &&
      super.canActivate(context)
    );
  }
}
