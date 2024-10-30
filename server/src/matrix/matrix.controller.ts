import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MatrixService } from './matrix.service';
import { Matrix } from './matrix.entity';
import { UpdateMatrixDto } from './dto/update-matrix.dto';

@Controller('matrix-reflections')
export class MatrixController {
    constructor(private readonly matrixService: MatrixService) {}

    @Get(':page')
    findOnd(@Param('page') page:string) {
        return this.matrixService.findOne(page);
    }

    @Get()
    findAll() {
        return this.matrixService.findAll();
    }

    @Post()
    createEntry(@Body() {id, category, page, entry_pos, input}:
    {id: number, category: string, page: string, entry_pos: number, input: string[]}) {
        return this.matrixService.createEntry(id, category, page, entry_pos, input)
    }

    //@Put(':name')
    //replaceEntry(@Param('name') name: string, @Body() data: Matrix) {
    //    return this.matrixService.replaceEntry(name, data)
    //}

    @Patch()
    updateEntry(@Query('page') page: string, @Query('entry_pos') entry_pos: number, @Body() updateMatrixDto: UpdateMatrixDto) {
        return this.matrixService.updateEntry(page, entry_pos, updateMatrixDto)
    }

    @Delete(':name')
    deleteOne(@Param('name') name:string) {
        return this.matrixService.deleteOne(name);
    }
}
