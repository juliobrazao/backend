import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MySQLModule } from './mysql.module';
import { UserModule } from './user.module';
import { KeycloakModule } from '../auth/keycloak.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MySQLModule,
    UserModule,
    KeycloakModule,
  ],
})
export class AppModule {}
