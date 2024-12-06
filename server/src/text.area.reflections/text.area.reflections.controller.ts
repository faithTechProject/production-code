import { Body, Controller, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { TextAreaReflectionsService } from './text.area.reflections.service';
import { CreateTextAreaReflectionsDto } from './dto/create-text.area.reflections.dto';
import { UpdateTextAreaReflectionsDto } from './dto/update-text.area.reflections.dto';

@Controller('text-area-reflections') // localhost:3000/text-area-reflection.  This is the base route.
export class TextAreaReflectionsController {
    constructor(private readonly textAreaReflectionService: TextAreaReflectionsService) {}

    @Get() // finds all records
    findAll() {
        return this.textAreaReflectionService.findAll();
    }

    @Get(':page') // finds all records that have a certain page value
    findAllPage(@Param('page') page:string) {
        return this.textAreaReflectionService.findAllPage(page);
    }

    @Post() // adds a new reflection to the database.
    addPost(@Body() createTextAreaReflectionsDto:CreateTextAreaReflectionsDto) {
        return this.textAreaReflectionService.addPost(createTextAreaReflectionsDto);
    }

    @Patch() // updates an already existing reflection with different data.
    update(@Query('page') page: string, @Query('entry_pos') entry_pos: number, @Body() updateUserDto: UpdateTextAreaReflectionsDto) {
        return this.textAreaReflectionService.update(page, entry_pos, updateUserDto)
    }
}
