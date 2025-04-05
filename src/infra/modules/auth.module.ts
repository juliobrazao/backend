import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { KeycloakStrategy } from '@/infra/auth/keycloak.strategy';
import { AuthController } from '@/presentation/controllers/auth.controller';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [KeycloakStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
