import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoCreationEntity } from './request-form.entity';
import { RequestFormController } from './request-form.controller';
import { RequestFormService } from './request-form.service';

@Module({
  imports: [TypeOrmModule.forFeature([CoCreationEntity])],
  controllers: [RequestFormController],
  providers: [RequestFormService],
})
export class RequestFormModule {}
