import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Matrix } from './matrix.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MatrixService {
    constructor (
        @InjectRepository(Matrix)
        private readonly matrixRepository: Repository<Matrix>
    ) {}

    findOne(name: string) {
        return this.matrixRepository.find({
            where: {
                name: name
            }
        })
    }

    findAll() {
        return this.matrixRepository.find();
    }

    createEntry(name: string, data: string[]) {
        const entry = this.matrixRepository.create({ name, data });
        return this.matrixRepository.save(entry);
    }

    replaceEntry(name: string, data: Partial<Matrix>) {
        this.matrixRepository.update(name, data)
        
        return this.findOne(name)
     }

    deleteOne( name: string) {
        this.matrixRepository.delete(name);
     }
}
