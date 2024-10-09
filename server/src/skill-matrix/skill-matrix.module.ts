import { Module } from '@nestjs/common';
import { SkillMatrixController } from './skill-matrix.controller';
import { SkillMatrixService } from './skill-matrix.service';

@Module({
  controllers: [SkillMatrixController],
  providers: [SkillMatrixService],
  exports: [SkillMatrixService]
})
export class SkillMatrixModule {}
