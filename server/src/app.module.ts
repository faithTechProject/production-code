import { Controller, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // import typeorm for postgres connection.
import { Poll } from './poll/poll.entity';
import { PollService } from './poll/poll.service';
import { PollController } from './poll/poll.controller';
import { UsersModule } from './users/users.module';
import { Info } from './info/info.entity';
import { InfoController } from './info/info.controller';
import { InfoService } from './info/info.service';
import { ReflectionController } from './reflection/reflection.controller';
import { Reflection } from './reflection/reflection.entity'
import { ReflectionService } from './reflection/reflection.service';
import { MatrixModule } from './matrix/matrix.module';
import { Matrix } from './matrix/matrix.entity';
import { MatrixController } from './matrix/matrix.controller';
import { MatrixService } from './matrix/matrix.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'faithtech_user',
      password: 'faithtech_password',
      database: 'faithtech_create',
      entities: [Poll, Info, Reflection, Matrix], // postgres database tables.
      synchronize: true, // not for production builds.  Data loss posible.
    }),
    TypeOrmModule.forFeature([Poll, Info, Reflection, Matrix]),
    UsersModule
  ],
  controllers: [ReflectionController, MatrixController, PollController],
  providers: [ReflectionService, MatrixService, PollService],
})
export class AppModule {}
