import { UserMySQLEntity } from '@/domain/entities/user-mysql.entity';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMySQLRepository } from '../repositories/user-mysql.repository';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('MYSQL_HOST'),
        port: configService.get<number>('MYSQL_PORT'),
        username: configService.get<string>('MYSQL_USER'),
        password: configService.get<string>('MYSQL_PASSWORD'),
        database: configService.get<string>('MYSQL_DATABASE'),
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([UserMySQLEntity]),
  ],
  exports: [TypeOrmModule, UserMySQLRepository],
  providers: [UserMySQLRepository],
})
export class MysqlModule {}
