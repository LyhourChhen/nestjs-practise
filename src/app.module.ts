import { Global, Module } from '@nestjs/common';
import { CatsModule } from './modules/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';
import { User } from './entities/user.entity';
import { UserModule } from './modules/user.module';
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
export class AppModule {
  constructor(private connection: Connection) {}
}
