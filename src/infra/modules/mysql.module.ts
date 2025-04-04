import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '@/domain/entities/user.entity';
import MySQLRepositoryProxy from '../providers/mysql-repository-proxy.service';

// ✅ Define an injection token (string or symbol)
export const MYSQL_PROXY_REPOSITORY = 'IMySQLProxyRepository';

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
        autoLoadEntities: true,
        synchronize: configService.get<boolean>('MYSQL_SYNCHRONIZE'),
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    {
      provide: MYSQL_PROXY_REPOSITORY, // ✅ Use a token instead of an interface
      useClass: MySQLRepositoryProxy,
    },
  ],
  exports: [MYSQL_PROXY_REPOSITORY], // ✅ Export the token
})
export class MySQLModule {}
