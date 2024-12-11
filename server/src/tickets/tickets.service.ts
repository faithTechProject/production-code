import { Injectable } from '@nestjs/common';
import { MoreThan, Repository } from 'typeorm';
import { Tickets } from './tickets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTicketsDto } from './dto/update-tickets.dto';
import { CreateTicketsDto } from './dto/create-tickets-dto';

@Injectable()
export class TicketsService {
    constructor (
        @InjectRepository(Tickets) // makes the Ticket entity available to ticketsRepository.
        private readonly ticketsRepository: Repository<Tickets> // Mapp
    ) {}

    // returns all rows in the tickets table.
    findAll() {
        return this.ticketsRepository.find();
    }

    // return a row where the column id matches the id passed in.
    findOne(id: number) {
        return this.ticketsRepository.findOneBy({ id });
    }

    // return all the within a certian status group. eg: not started, in progress or completed.
    findStatus(status: string) {
        return this.ticketsRepository.findBy({ status });
    }

    // adds a ticket to the database
    createTicket(createTicketsDto: CreateTicketsDto) {
        
        // creates a table row and stores it in "entry".
        const entry = this.ticketsRepository.create(createTicketsDto);
        
        // saves the row to the database.
        return this.ticketsRepository.save(entry);
    }

    // handels when a ticket is moved around to a different group status.
    async moveTicket(id: number, updateTicketsDto: UpdateTicketsDto) {
        const oldTicket = await this.ticketsRepository.findOneBy({ id });
        if (oldTicket.status == updateTicketsDto.status){
            
            const tickets = await this.ticketsRepository.find({ where: { status: updateTicketsDto.status }});
            tickets.sort((a, b) => a.row_index - b.row_index);
            tickets.splice(updateTicketsDto.row_index, 0, tickets.splice(tickets.findIndex(item => item.id == id), 1)[0]);
            for (let i=0; i<tickets.length; ++i) {
                await this.updateTickets(tickets[i].id, {row_index: i})
            }
        }
        else {
            const tickets = await this.ticketsRepository.find({ where: { status: updateTicketsDto.status }});
            tickets.sort((a, b) => a.row_index - b.row_index);
            tickets.splice(updateTicketsDto.row_index, 0, await(this.ticketsRepository.findOneBy({ id })));
            for (let i=0; i<tickets.length; ++i) {
                await this.updateTickets(tickets[i].id, {status: updateTicketsDto.status, row_index: i})
            }

            const otherColumn = await this.ticketsRepository.find({ where: { status: oldTicket.status }});
            otherColumn.sort((a, b) => a.row_index - b.row_index);
            for (let i=0; i<otherColumn.length; ++i) {
                await this.updateTickets(otherColumn[i].id, { row_index: i })
            }
        }
        return this.findAll();
    }


    async updateTickets(id: number, updateTicketsDto: UpdateTicketsDto) {
        const toUpdate = await this.ticketsRepository.findOneBy({ id });
        const updated = Object.assign(toUpdate, updateTicketsDto)
        return await this.ticketsRepository.save(updated)
    }

    // removes a ticket from the database.
    async deleteTicket(id: number) {
        const ticket = await this.findOne(id);
        const status = ticket.status;
        const rowNum = await this.ticketsRepository.count()
        await this.ticketsRepository.delete({ id: id })
        const rowsToUpdate = await this.ticketsRepository.find({ where: {id: MoreThan(id) }})
        
        for (let i=0; i<rowsToUpdate.length; ++i) {
            --rowsToUpdate[i].id;
            await this.updateTickets(rowsToUpdate[i].id + 1, rowsToUpdate[i])
        }

        if (rowNum > 1) {
            await this.ticketsRepository.delete({ id: rowNum })
        }
        const ticketColumn = await this.findStatus(status);
        ticketColumn.sort((a, b) => a.row_index - b.row_index);
        for (let i=0; i<ticketColumn.length; ++i) {
            ticketColumn[i].row_index = i;
            
            await this.updateTickets(ticketColumn[i].id, ticketColumn[i])
        }
        return await this.findAll();
    }
}