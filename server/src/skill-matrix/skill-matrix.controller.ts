import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SkillMatrixService } from './skill-matrix.service';

@Controller('skill-matrix')
export class SkillMatrixController {
    constructor(private readonly skillMatrixService: SkillMatrixService) {}

    @Get(':id')
    findOnd(@Param('id') id:string) {
        return this.skillMatrixService.findOne(+id);
    }

    @Post()
    createEntry(@Body() {id, name, skills, past_experiences, areas_for_growth}:
    {id: number, name: string, skills: string, past_experiences: string, areas_for_growth: string}) {
        return this.skillMatrixService.createEntry(id, name, skills, past_experiences, areas_for_growth)
    }
}
