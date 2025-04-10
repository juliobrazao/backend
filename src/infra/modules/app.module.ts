import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MySQLModule } from './mysql.module';
import { UserModule } from './user.module';
import { MongoModule } from './mongo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MySQLModule,
    MongoModule,
    UserModule,
  ],
})
export class AppModule {}
