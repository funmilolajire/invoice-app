import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet())
  app.enableCors()
  const config = new DocumentBuilder()
    .setTitle('Invoice App API')
    .setDescription('Invoices API description')
    .setVersion('1.0')
    .addTag('invoices')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/', app, document);
  const PORT = process.env.PORT || 8080
  await app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
  });
}
bootstrap();
