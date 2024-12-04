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
import { TicketsController } from './tickets/tickets.controller';
import { TicketsModule } from './tickets/tickets.module';
import { Tickets } from './tickets/tickets.entity';
import { TicketsService } from './tickets/tickets.service';
import { CoCreationEntity } from './co_creation_page/request-form.entity';
import { RequestFormModule } from './co_creation_page/request-form.module';
import { RequestFormController } from './co_creation_page/request-form.controller';
import { RequestFormService } from './co_creation_page/request-form.service';
import { AnalysisDndController } from './analysis.dnd/analysis.dnd.controller';
import { AnalysisDndService } from './analysis.dnd/analysis.dnd.service';
import { Story } from './story_page/story.entity';
import { StoryModule } from './story_page/story.module';
import { Analysis } from './analysis.dnd/analysis.dnd.entity';
import { StoryController } from './story_page/story.controller';
import { StoryService } from './story_page/story.service';



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
      entities: [Analysis, CoCreationEntity, Matrix, Reflection, Story, TextAreaReflections, Tickets] 
  }),
 
    TypeOrmModule.forFeature([Analysis, CoCreationEntity, Matrix, Reflection, Story, TextAreaReflections, Tickets]),
    
    
  ],
  controllers: [AnalysisDndController, RequestFormController, MatrixController, ReflectionController, StoryController, TextAreaReflectionsController, TicketsController],
  providers: [AnalysisDndService, RequestFormService, MatrixService, ReflectionService, StoryService, TextAreaReflectionsService, TicketsService],

})
export class AppModule {}
