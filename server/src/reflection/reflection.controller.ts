import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { ReflectionService } from './reflection.service';
import { Reflection } from './reflection.entity';

@Controller('reflection')
export class ReflectionController {
    constructor(private readonly reflectionService: ReflectionService) {}

    @Get(':id') // GET /information/id
    findOne(@Param('id') id:string) {
        return this.reflectionService.findOne(+id);
    }

    @Get() 
    findAll() {
        return this.reflectionService.findAll();
    }

    @Post()
    createReflection(@Body() { response }: { id: number, response: string }) {
        return this.reflectionService.createReflection( response);
    }

    @Put(':id')
    updateReflection(@Param('id') id: number, @Body() response: Reflection): Promise<any> {
        return this.reflectionService.updateReflection(id, response);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: string) {
        return this.reflectionService.deleteOne(+id);
    }
}
