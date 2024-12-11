import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TextAreaReflections } from './text.area.reflections.entity';
import { Repository } from 'typeorm';
import { CreateTextAreaReflectionsDto } from './dto/create-text.area.reflections.dto' 
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

    async addPost(createTextAreaReflectionsDto:CreateTextAreaReflectionsDto): Promise<TextAreaReflections> { 
        const post = this.textAreasRepository.create(createTextAreaReflectionsDto) // Add new entry
        return this.textAreasRepository.save(post)
    }

    async update(page: string, entry_pos: number, updateTextAreaReflectionsDto: UpdateTextAreaReflectionsDto): Promise<TextAreaReflections>{
        const toUpdate = await this.textAreasRepository.findOne({where: { page:page, entry_pos:entry_pos  } });
        const updated = Object.assign(toUpdate, updateTextAreaReflectionsDto);
        return await this.textAreasRepository.save(updated); // update already existing entry with different data and return.
    }
}
