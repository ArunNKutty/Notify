import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';


async function bootstrap() {
  const origin = [
  
  ]
  const cors = {
    "origin": origin,
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  const app = await NestFactory.create(AppModule, { cors: cors });

  const config = new DocumentBuilder()
    .setTitle('Notify')
    .setDescription('Notifying Users based on Rules ')
    .setVersion('0.1.1')
    .addTag('notify')
    .build();

  app.setGlobalPrefix('/notify');
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);
  const PORT = process.env.PORT || 4008
  await app.listen(PORT);
}
bootstrap();

