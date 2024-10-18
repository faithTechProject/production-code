import { Injectable } from '@nestjs/common';
import { Reflection } from './reflection.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { response } from 'express';

@Injectable()
export class ReflectionService {
    constructor (
        @InjectRepository(Reflection)
        private readonly reflectionRepository: Repository<Reflection>,
     ) {}

     async findOne(id: number): Promise<Reflection[]> {
        return this.reflectionRepository.find({
            where: {
                id: id
            }
        })
    }

    async findAll(): Promise<Reflection[]> {
        return this.reflectionRepository.find();
    }

     async createReflection(response: string): Promise<Reflection> {
        const post = this.reflectionRepository.create({ response });
        return this.reflectionRepository.save(post);
     }

     async updateReflection(id: number, response: Partial<Reflection>): Promise<Reflection[]> {
        this.reflectionRepository.update(id, response);
        
        return this.findOne(id)
     }

     async deleteOne( id: number): Promise<void> {
        this.reflectionRepository.delete(id);
     }
}
