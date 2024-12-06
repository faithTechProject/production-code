import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { MatrixService } from './matrix.service';
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
    createEntry(@Body() {id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input}:
    {id: number, category: string, page: string, entry_pos: number, input: string[], tasks_rows: string[], roles_columns: string[], rci_input: string[]}) {
        return this.matrixService.createEntry(id, category, page, entry_pos, input, tasks_rows, roles_columns, rci_input)
    }

    @Patch()
    updateEntry(@Query('page') page: string, @Query('entry_pos') entry_pos: number, @Body() updateMatrixDto: UpdateMatrixDto) {
        return this.matrixService.updateEntry(page, entry_pos, updateMatrixDto)
    }

    @Delete(':name')
    deleteOne(@Param('name') name:string) {
        return this.matrixService.deleteOne(name);
    }
}
