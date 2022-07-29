import {ValidationPipe} from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
import * as packageJson from '../package.json';
import {FirebaseSdk} from '../firebase-adminsdk';
import {join} from 'path';


async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true });
  app.setGlobalPrefix('api');
  app.useStaticAssets(join(__dirname, '..', '..', 'public'));
  const config = new DocumentBuilder()
    .setTitle('Nest study')
    .setDescription('Studying nest.js')
    .setVersion(packageJson.version)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }));

  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: FirebaseSdk.project_id,
      clientEmail: FirebaseSdk.client_email,
      privateKey: FirebaseSdk.private_key
    }),
  });

  await app.listen(4100);

}
bootstrap().then(() => {});
