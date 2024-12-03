import { Injectable } from '@nestjs/common';
import { And, ListCollectionsCursor, MoreThan, MoreThanOrEqual, Not, Repository } from 'typeorm';
import { Tickets } from './tickets.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateTicketsDto } from './dto/update-tickets.dto';
import { CreateTicketsDto } from './dto/create-tickets-dto';
import { NotContains, NotEquals } from 'class-validator';

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


    async ticketUpdateIndex(updateTicketsDto: UpdateTicketsDto) {
        

    }

    async moveTicket(id: number, updateTicketsDto: UpdateTicketsDto) {
        const toUpdate = await this.ticketsRepository.findOneBy( { id } );
        const oldStatus = toUpdate.status
        const updated = Object.assign(toUpdate, updateTicketsDto)
        await this.ticketsRepository.save(updated);
        //console.log(updated)

        
        //console.log(updateTicketsDto.status)
        
        if (oldStatus == updateTicketsDto.status) {
            const tickets = await this.ticketsRepository.find({
                where: {
                    row_index: MoreThanOrEqual(updateTicketsDto.row_index), 
                    status: updateTicketsDto.status,
                    id: Not(id) 
                    }
                });

            tickets.sort((a, b) => a.row_index - b.row_index);
            for (let i=0; i<tickets.length; ++i) {
                tickets[i].row_index = i + 1 + updateTicketsDto.row_index;
                await this.updateTicketIds(tickets[i].id, tickets[i])
            }
        }
        
        
        //console.log(oldStatus)
        //console.log(updateTicketsDto.status)
        if (oldStatus != updateTicketsDto.status) {
            const otherColumn = await this.ticketsRepository.find({ where: {status: oldStatus }});
            otherColumn.sort((a, b) => a.row_index - b.row_index);
            //console.log(otherColumn)
            for (let i=0; i<otherColumn.length; ++i) {
                otherColumn[i].row_index = i;
                await this.updateTicketIds(otherColumn[i].id, otherColumn[i])
            }

            const otherColumn2 = await this.ticketsRepository.find({ where: {
                                                                        row_index: MoreThanOrEqual(updateTicketsDto.row_index),
                                                                        status: updateTicketsDto.status,
                                                                        id: Not(id)
                                                                        
                                                                        }
                                                                    });
            otherColumn2.sort((a, b) => a.row_index - b.row_index);
            for (let i=0; i<otherColumn2.length; ++i) {
                console.log("inside")
                otherColumn2[i].row_index = i + 1 + updateTicketsDto.row_index;
                console.log(otherColumn2[i])
                await this.updateTicketIds(otherColumn2[i].id, otherColumn2[i])
                
            }
            //console.log(otherColumn2)
        }
        
        return this.findAll();
    }


    async updateTicketIds(id: number, updateTicketsDto: UpdateTicketsDto) {
        
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
            await this.updateTicketIds(rowsToUpdate[i].id + 1, rowsToUpdate[i])
        }

        if (rowNum > 1) {
            await this.ticketsRepository.delete({ id: rowNum })
        }
        const ticketColumn = await this.findStatus(status);
        ticketColumn.sort((a, b) => a.row_index - b.row_index);
        console.log(ticketColumn)
        for (let i=0; i<ticketColumn.length; ++i) {
            ticketColumn[i].row_index = i;
            
            await this.updateTicketIds(ticketColumn[i].id, ticketColumn[i])
        }

        
        //this.ticketsRepository.save()
        //console.log(rowstoUpdate)
        return await this.findAll();
                //this.ticketsRepository.delete(id)
    }
}