import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { TicketsService } from './tickets.service';
import { CreateTicketsDto } from './dto/create-tickets-dto';
import { UpdateTicketsDto } from './dto/update-tickets.dto';

@Controller('tickets')
export class TicketsController {
    constructor(private readonly ticketsService: TicketsService) {}

    @Get('/status')
    findStatus(@Query('name') name: string) {
        return this.ticketsService.findStatus(name);
    }

    @Get()
    findAll() {
        return this.ticketsService.findAll();
    }

    @Get(':id')  // :id represents the last piece of the url.  Example: https://localhost:3000/tickets/1.  :id is 1
    findOne(@Param('id') id: number) {
        return this.ticketsService.findOne(id);
    }

    @Patch()
        moveTicket(@Query('id') id: number, @Body() updateTicketsDto: UpdateTicketsDto) {
            return this.ticketsService.moveTicket(id, updateTicketsDto)
        }
    @Patch('update')
        updateTicketIds(@Query('id') id: number, @Body() updateTicketsDto: UpdateTicketsDto) {
            return this.ticketsService.updateTicketIds(id, updateTicketsDto)
        }

    @Post()
        createTicket(@Body() createTicketsDto: CreateTicketsDto) {
            return this.ticketsService.createTicket(createTicketsDto);
        }

    @Delete(':id')
        deleteTicket(@Param('id') id:number) {
            return this.ticketsService.deleteTicket(id);
        }
}