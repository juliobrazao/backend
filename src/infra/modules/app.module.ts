import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MysqlModule } from '@/infra/providers/mysql.module';
import { MongoModule } from '@/infra/providers/mongo.module';
import { UserModule } from './user.module';
import { UserController } from '@/presentation/controllers/user.controller';
import { KeycloakModule } from '../auth/keycloak.module';
import { AuthController } from '@/presentation/controllers/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MysqlModule,
    MongoModule,
    UserModule,
    KeycloakModule,
  ],
  controllers: [UserController, AuthController],
})
export class AppModule {}
