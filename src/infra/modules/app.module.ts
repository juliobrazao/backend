import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MysqlModule } from '@/infra/providers/mysql.module';
import { MongoModule } from '@/infra/providers/mongo.module';
import { UserModule } from './user.module';
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
  controllers: [AuthController],
})
export class AppModule {}
