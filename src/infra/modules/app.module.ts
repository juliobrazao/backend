import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MySQLModule } from './mysql.module';
import { UserModule } from './user.module';
import { KeycloakModule } from '../auth/keycloak.module';
import { AuthModule } from './auth.module';
import { ProtectedModule } from './protected.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MySQLModule,
    UserModule,
    KeycloakModule,
    AuthModule,
    ProtectedModule,
  ],
})
export class AppModule {}
