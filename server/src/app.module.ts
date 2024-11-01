import { Controller, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // import typeorm for postgres connection.
import { ReflectionController } from './reflection/reflection.controller';
import { Reflection } from './reflection/reflection.entity'
import { ReflectionService } from './reflection/reflection.service';
import { MatrixModule } from './matrix/matrix.module';
import { Matrix } from './matrix/matrix.entity';
import { MatrixController } from './matrix/matrix.controller';
import { MatrixService } from './matrix/matrix.service';
import { ConfigService } from '@nestjs/config';
import { TextAreaReflectionsModule } from './text.area.reflections/text.area.reflections.module';
import { TextAreaReflectionsController } from './text.area.reflections/text.area.reflections.controller';
import { TextAreaReflectionsService } from './text.area.reflections/text.area.reflections.service';
import { TextAreaReflections } from './text.area.reflections/text.area.reflections.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'faithtech_user',
      password: 'faithtech_password',
      database: 'faithtech_create',
      synchronize: false,
      entities: [Reflection, Matrix, TextAreaReflections] // postgres database tables.
  }),
    TypeOrmModule.forFeature([Reflection, Matrix, TextAreaReflections])
  ],
  controllers: [ReflectionController, MatrixController, TextAreaReflectionsController],
  providers: [ReflectionService, MatrixService, TextAreaReflectionsService],

})
export class AppModule {}
