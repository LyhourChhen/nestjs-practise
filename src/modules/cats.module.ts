import { Module } from '@nestjs/common';
import { CatsController } from 'src/controllers/cats.controllers';
import { CatsServices } from 'src/services/cats.services';

@Module({
  controllers: [CatsController],
  providers: [CatsServices],
})
export class CatsModule {}
