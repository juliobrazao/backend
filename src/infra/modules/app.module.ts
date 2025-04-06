import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MySQLModule } from './mysql.module';
import { UserModule } from './user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MySQLModule, UserModule],
})
export class AppModule {}
