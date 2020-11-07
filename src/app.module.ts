import {
  Global,
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsModule } from './modules/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserModule } from './modules/user.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '172.105.126.175',
      port: 5432,
      username: 'postgres',
      password: 'Cambodia@123',
      entities: [User],
      synchronize: true,
      database: 'nestjs-test-db',
    }),
    CatsModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(cors(), helmet(), LoggerMiddleware)
      .forRoutes({ method: RequestMethod.GET, path: 'cats' });
  }
}
