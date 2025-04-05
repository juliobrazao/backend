import { ProtectedController } from '@/presentation/controllers/protected.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ProtectedController],
})
export class ProtectedModule {}
