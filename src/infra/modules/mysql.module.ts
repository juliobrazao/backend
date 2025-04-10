import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '@/infra/repositories/mysql/entities/user.entity';
import IMySQLProxyRepository from '@/domain/repositories/abstract-mysql-proxy.repository';
import MySQLRepositoryProxy from '../providers/mysql-repository-proxy.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
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
        synchronize: configService.get<boolean>('MYSQL_SYNCHRONIZE'),
        entities: [
          __dirname + '/../repositories/mysql/entities/*.entity{.ts,.js}',
        ],
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    {
      provide: IMySQLProxyRepository,
      useClass: MySQLRepositoryProxy,
    },
  ],
  exports: [IMySQLProxyRepository],
})
export class MySQLModule {}
