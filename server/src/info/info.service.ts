import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Info } from './info.entity';

@Injectable()
export class InfoService {
    constructor (
        @InjectRepository(Info)
        private readonly infoRepository: Repository<Info>,
    ) {}
    
    async findOne(id: number): Promise<Info[]> {
        return this.infoRepository.find({
            where: {
                id: id
            }
        })
    }

    async createInfo(first_name: string, last_name: string, email: string, phone_number: string): Promise<Info> {
        const info = this.infoRepository.create({ first_name, last_name, email, phone_number });
        return this.infoRepository.save(info);
    }

    async deleteOne(id: number): Promise<void> {
        this.infoRepository.delete(id);
    }    
}