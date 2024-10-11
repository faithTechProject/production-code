import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { MatrixService } from './matrix.service';
import { Matrix } from './matrix.entity';

@Controller('matrix')
export class MatrixController {
    constructor(private readonly matrixService: MatrixService) {}

    @Get(':name')
    findOnd(@Param('name') name:string) {
        return this.matrixService.findOne(name);
    }

    @Get()
    findAll() {
        return this.matrixService.findAll();
    }

    @Post()
    createEntry(@Body() {name, data}:
    {name: string, data: string[]}) {
        return this.matrixService.createEntry(name, data)
    }

    @Put(':name')
    replaceEntry(@Param('name') name: string, @Body() data: Matrix) {
        return this.matrixService.replaceEntry(name, data)
    }

    @Delete(':name')
    deleteOne(@Param('name') name:string) {
        return this.matrixService.deleteOne(name);
    }
}
