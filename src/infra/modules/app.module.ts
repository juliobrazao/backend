import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MysqlModule } from '@/infra/providers/mysql.module';
import { MongoModule } from '@/infra/providers/mongo.module';
import { UserModule } from './user.module';
import { UserController } from '@/presentation/controllers/user.controller';
import { KeycloakModule } from '../auth/keycloak.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MysqlModule,
    MongoModule,
    UserModule,
    KeycloakModule,
  ],
  controllers: [UserController],
})
export class AppModule {}
