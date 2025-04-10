import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { User } from '../repositories/mongo/entities/user.entity';
import IMongoProxyRepository from '@/domain/repositories/abstract-mongo-proxy.repository';
import MongoRepositoryProxy from '../providers/mongo-repository-proxy.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mongodb',
        url: `mongodb://${configService.get<string>('MONGO_USER')}:${configService.get<string>('MONGO_PASSWORD')}@${configService.get<string>('MONGO_HOST')}:${configService.get<string>('MONGO_PORT')}/${configService.get<string>('MONGO_DATABASE')}?authSource=admin`,
        autoLoadEntities: true,
        synchronize: true,
      }),
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [
    {
      provide: IMongoProxyRepository,
      useClass: MongoRepositoryProxy,
    },
  ],
  exports: [IMongoProxyRepository],
})
export class MongoModule {}
