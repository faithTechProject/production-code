import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
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

    async deleteBlock(brainstorm_id: number, brainstorm_table_id: number): Promise<Analysis>{
        const deleted = await this.analysisDndRepository.findOneBy({ brainstorm_id: brainstorm_id, brainstorm_table_id: brainstorm_table_id })
        await this.analysisDndRepository.delete({ brainstorm_id: brainstorm_id, brainstorm_table_id: brainstorm_table_id })
        
        const brainstormList = await this.analysisDndRepository.findBy( {brainstorm_table_id: brainstorm_table_id })
        brainstormList.sort((a, b) => a.brainstorm_id - b.brainstorm_id);
        
        
        console.log(deleted.id)
        // update the brainstrom_id values starting at 0
        for (let i=0; i<brainstormList.length; ++i) {
            await this.updateBlock(brainstormList[i].id, {brainstorm_id: i})
        }

        // update all the id's in ascending order.
        await this.analysisDndRepository.query(`WITH renumbered AS (SELECT id, ROW_NUMBER() OVER (ORDER BY id) AS new_id FROM analysis)
            UPDATE analysis SET id = Renumbered.new_id FROM renumbered WHERE analysis.id = Renumbered.id`)
        return;
    }
}
