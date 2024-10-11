import { Body, Delete, Get, Param, Post} from '@nestjs/common';
import { Controller, Query } from '@nestjs/common';
import { InfoService } from './info.service';
import { first } from 'rxjs';

@Controller('information')
export class InfoController {
    constructor(private readonly infoService: InfoService) {}

    @Get(':id') // GET /information/id
    findOne(@Param('id') id:string) {
        return this.infoService.findOne(+id);
    }

    @Post() // POST /information
    createInfo(@Body() {first_name, last_name, email, phone_number}:
     {first_name: string, last_name: string, email: string, phone_number: string}) {
        return this.infoService.createInfo(first_name, last_name, email, phone_number);
     }

     @Delete(':id') // DELETE /information
     deleteOne(@Param('id') id:string) {
        return  this.infoService.deleteOne(+id);
     }
}
