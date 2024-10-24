import { Body, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TextAreaReflections } from './text.area.reflections.entity';
import { Repository } from 'typeorm';
import { UpdateTextAreaReflectionsDto } from './dto/update-text.area.reflections.dto';

@Injectable()
export class TextAreaReflectionsService {
    constructor(
        @InjectRepository(TextAreaReflections)
        private readonly textAreasRepository: Repository<TextAreaReflections>,
    ) {}

    async findAll(): Promise<TextAreaReflections[]> {
        return this.textAreasRepository.find() // All table entries
    }

    async findAllPage(page: string): Promise<TextAreaReflections[]>{
        return this.textAreasRepository.find({where: {page: page} // table entries that with page = "page"
        })
    }

    async addPost(id: number, page: string, entry_pos: number, title: string, subtitle: string, reply: string): Promise<TextAreaReflections> { 
        const post = this.textAreasRepository.create({id, page, entry_pos, title, subtitle, reply}) // Add new entry
        return this.textAreasRepository.save(post)
    }

    async update(entry_pos: number, page: string, updateTextAreaReflectionsDto: UpdateTextAreaReflectionsDto) {
        const toUpdate = await this.textAreasRepository.findOne({where: { entry_pos:entry_pos, page:page } });
        const updated = Object.assign(toUpdate, updateTextAreaReflectionsDto);
        return await this.textAreasRepository.save(updated);
    }
}
