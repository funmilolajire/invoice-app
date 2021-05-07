import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet())
  app.enableCors()
  await app.listen(process.env.PORT || 7000, () => {
    console.log('Server listening on port 7000')
  });
}
bootstrap();
