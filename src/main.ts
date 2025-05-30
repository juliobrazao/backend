import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/infra/modules/app.module';
import { setupSwagger } from '@/infra/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  app.enableCors();
  await app.listen(3001);
}
bootstrap();
