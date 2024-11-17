import { Injectable } from '@nestjs/common';
import { ListCollectionsCursor, MoreThan, Repository } from 'typeorm';
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


    async moveTicket(movedTicketId: number, movedTicketPosition: number, movedTicketNewStatus: number, updateTicketsDto: UpdateTicketsDto) {

        console.log(updateTicketsDto.status)
        console.log(updateTicketsDto.row_index)
        const list = await this.findStatus('not started');

        for (let i=0; i<list.length; ++i) {
            if (list[i].row_index > position)
        }
        return list;

    }

    async updateTicketIds(id: number, updateTicketsDto: UpdateTicketsDto) {
        
        const toUpdate = await this.ticketsRepository.findOneBy({ id });
        const updated = Object.assign(toUpdate, updateTicketsDto)
        return await this.ticketsRepository.save(updated)
    }

    // removes a ticket from the database.
    async deleteTicket(id: number) {
        const rowNum = await this.ticketsRepository.count()
        await this.ticketsRepository.delete({ id: id })
        const rowsToUpdate = await this.ticketsRepository.find({ where: {id: MoreThan(id) }})
        
        for (let i=0; i<rowsToUpdate.length; ++i) {
            --rowsToUpdate[i].id;
            this.updateTicketIds(rowsToUpdate[i].id + 1, rowsToUpdate[i])
        }

        if (rowNum > 1) {
            await this.ticketsRepository.delete({ id: rowNum })
        }

        //this.ticketsRepository.save()
        //console.log(rowstoUpdate)
        return await this.findAll();
                //this.ticketsRepository.delete(id)
    }
}