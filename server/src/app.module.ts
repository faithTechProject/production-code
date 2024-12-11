import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // import typeorm for postgres connection.
import { Matrix } from './matrix/matrix.entity';
import { MatrixController } from './matrix/matrix.controller';
import { MatrixService } from './matrix/matrix.service';
import { TextAreaReflectionsController } from './text.area.reflections/text.area.reflections.controller';
import { TextAreaReflectionsService } from './text.area.reflections/text.area.reflections.service';
import { TextAreaReflections } from './text.area.reflections/text.area.reflections.entity';
import { TicketsController } from './tickets/tickets.controller';
import { Tickets } from './tickets/tickets.entity';
import { TicketsService } from './tickets/tickets.service';
import { AnalysisDndController } from './analysis.dnd/analysis.dnd.controller';
import { AnalysisDndService } from './analysis.dnd/analysis.dnd.service';
import { Story } from './story_page/story.entity';
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
      entities: [Analysis, Matrix, Story, TextAreaReflections, Tickets] 
  }),
 
    TypeOrmModule.forFeature([Analysis, Matrix, Story, TextAreaReflections, Tickets]),
    
    
  ],
  controllers: [AnalysisDndController, MatrixController, StoryController, TextAreaReflectionsController, TicketsController],
  providers: [AnalysisDndService, MatrixService, StoryService, TextAreaReflectionsService, TicketsService],

})
export class AppModule {}
