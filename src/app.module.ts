import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { CatsController } from './controllers/cats.controllers';
import { AppService } from './services/app.service';
import { CatsServices } from './services/cats.services';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsServices],
})
export class AppModule {}
