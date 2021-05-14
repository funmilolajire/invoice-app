import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet())
  app.enableCors()
  const PORT = process.env.PORT || 8080
  await app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  });
}
bootstrap();
