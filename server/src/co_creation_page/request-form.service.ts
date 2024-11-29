import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CoCreationEntity } from './request-form.entity';
import { update_co_creation_dto } from './dto/update_co_creation-dto';

@Injectable()
export class RequestFormService {
  constructor(
    @InjectRepository(CoCreationEntity)
    private readonly coCreationRepository: Repository<CoCreationEntity>,
  ) {}

  // Fetch all rows
  async findAll(): Promise<CoCreationEntity[]> {
    return this.coCreationRepository.find();
  }

  // Fetch a single row by ID
  async findOne(id: number): Promise<CoCreationEntity> {
    return this.coCreationRepository.findOne({ where: { id } });
  }

  // Create a new row
  async create(data: Partial<CoCreationEntity>): Promise<CoCreationEntity> {
    const newEntry = this.coCreationRepository.create(data);
    return this.coCreationRepository.save(newEntry);
  }

  // Update a row by ID
  async update(id: number, data: Partial<CoCreationEntity>): Promise<CoCreationEntity> {
    await this.coCreationRepository.update(id, data);
    return this.coCreationRepository.findOne({ where: { id } });
  }

  async input(id: number, update_input:update_co_creation_dto){
    const to_update = await this.coCreationRepository.findOneBy({ id });
    console.log(update_input)
    console.log(to_update)
    const updated = Object.assign(to_update, update_input)
    await this.coCreationRepository.save(updated);
    console.log(updated)
  }

  // Delete a row by ID
  async delete(id: number): Promise<void> {
    await this.coCreationRepository.delete(id);
  }
}
