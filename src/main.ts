import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
const chalk = require('chalk');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable Swagger
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap()
  .then(() =>
    console.log(`Api is start on ${chalk.red('http://localhost:3000/api')}`),
  )
  .catch(err => console.log('init err', chalk.red(err)));
