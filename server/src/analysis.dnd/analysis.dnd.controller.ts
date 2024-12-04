import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { AnalysisDndService } from './analysis.dnd.service';
import { AnalysisDndDto } from './dto/create.analysis.dnd.dto';
import { PartialAnalysisDndDto } from './dto/update.analysis.dnd.dto';

@Controller('analysis')
export class AnalysisDndController {
    constructor(private readonly analysisDndService: AnalysisDndService) {}

    @Get()
    findAll() {
        return this.analysisDndService.findAll();
    }

    @Post()
    createBlock(@Body() analysisDndDto: AnalysisDndDto) {
        return this.analysisDndService.createBlock(analysisDndDto);
    }

    @Patch()
    updateBlock(@Query('id') id: number, @Body() partialAnalysisDndDto: PartialAnalysisDndDto) {
        return this.analysisDndService.updateBlock(id, partialAnalysisDndDto)
    }

    @Delete()
    deleteBlock(@Query('id') id: number) {
        return this.analysisDndService.deleteBlock(id);
    }
}
