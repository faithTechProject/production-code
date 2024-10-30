import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Matrix } from './matrix.entity';
import { Repository } from 'typeorm';
import { UpdateMatrixDto } from './dto/update-matrix.dto';

@Injectable()
export class MatrixService {
    constructor (
        @InjectRepository(Matrix)
        private readonly matrixRepository: Repository<Matrix>
    ) {}

    findOne(page: string) {
        return this.matrixRepository.find({where: { page: page }})
    }

    findAll() {
        return this.matrixRepository.find();
    }

    createEntry(id: number, category, page, entry_pos: number, input: string[]) {
        const entry = this.matrixRepository.create({ id, category, page, entry_pos, input });
        return this.matrixRepository.save(entry);
    }

    async updateEntry(page: string, entry_pos: number, updateMatrixDto: UpdateMatrixDto): Promise<Matrix> {
        const toUpdate = await this.matrixRepository.findOne({where: { entry_pos:entry_pos, page:page}});
        const updated = Object.assign(toUpdate, updateMatrixDto);
        return await this.matrixRepository.save(updated);
     }

    deleteOne( name: string) {
        this.matrixRepository.delete(name);
     }
}
