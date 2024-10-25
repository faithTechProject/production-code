import { Module } from '@nestjs/common';
import { TextAreaReflectionsController } from './text.area.reflections.controller';
import { TextAreaReflectionsService } from './text.area.reflections.service';

@Module({
  controllers: [TextAreaReflectionsController],
  providers: [TextAreaReflectionsService],
  exports: [TextAreaReflectionsService]
})
export class TextAreaReflectionsModule {}
