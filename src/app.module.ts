import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MysqlModule } from './infra/providers/mysql.module';
import { MongoModule } from './infra/providers/mongo.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), MysqlModule, MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
