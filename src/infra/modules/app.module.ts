import { Module } from '@nestjs/common';
import { MongoModule } from './mongo.module';
import { MySQLModule } from './mysql.module';

@Module({
  imports: [MongoModule, MySQLModule],
})
export class AppModule {}
