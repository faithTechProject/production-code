import { Module } from '@nestjs/common';
import { AnalysisDndService } from './analysis.dnd.service';

@Module({
    providers: [AnalysisDndService],
    exports: [AnalysisDndService]
})
export class AnalysisDndModule {}
