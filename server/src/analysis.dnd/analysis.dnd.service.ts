import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { Analysis } from './analysis.dnd.entity';
import { AnalysisDndDto } from './dto/create.analysis.dnd.dto';
import { PartialAnalysisDndDto } from './dto/update.analysis.dnd.dto';

@Injectable()
export class AnalysisDndService {
    constructor (
        @InjectRepository(Analysis)
        private readonly analysisDndRepository: Repository<Analysis>,
    ) {}

    findAll() {
        return this.analysisDndRepository.find();
    }

    createBlock(analysisDndDto: AnalysisDndDto) {
        const post = this.analysisDndRepository.create(analysisDndDto);
        return this.analysisDndRepository.save(post);
    }

    async updateBlock(id: number, partialAnalysisDndDto: PartialAnalysisDndDto) {
        const toUpdate = await this.analysisDndRepository.findOneBy( { id } );
        const updated = Object.assign(toUpdate, partialAnalysisDndDto)
        await this.analysisDndRepository.save(updated);
    }

    async deleteBlock(id: number) {
        await this.analysisDndRepository.delete({ id: id })
        const rowsToUpdate = await this.analysisDndRepository.find({ where: {id: MoreThan(id) }})
        rowsToUpdate.sort((a, b) => a.id - b.id);
        
        for(let i=0; i<rowsToUpdate.length; ++i) {
            const newId = rowsToUpdate[i].id - 1;
            console.log(rowsToUpdate[i]);
            await this.updateBlock(rowsToUpdate[i].id, {"id":newId})

            if (i === rowsToUpdate.length - 1) {
                await this.analysisDndRepository.delete(({ id: rowsToUpdate[i].id}))
            }
        }
    }
}
