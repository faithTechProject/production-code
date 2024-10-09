import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SkillMatrix } from './skill-matrix.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SkillMatrixService {
    constructor (
        @InjectRepository(SkillMatrix)
        private readonly skillmatrixRepository: Repository<SkillMatrix>
    ) {}

    async findOne(id: number) {
        return this.skillmatrixRepository.find({
            where: {
                id: id
            }
        })
    }

    async createEntry(id: number, name: string, skills: string, past_experiences: string, areas_for_growth: string) {
        const entry = this.skillmatrixRepository.create({
            id,
            name,
            skills,
            past_experiences,
            areas_for_growth
        });
        return this.skillmatrixRepository.save(entry);
    }
}
