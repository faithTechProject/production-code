import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Story } from './story.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { story_forms_dto } from './dto/story_forms-dto'

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(Story)
    private readonly storyRepository: Repository<Story>, // Inject the repository for database interaction
  ) {}

  // Fetch all stories
  async findAll(): Promise<Story[]> {
    try {
      return this.storyRepository.find();
    } catch (error) {
      throw new InternalServerErrorException('Error fetching stories', error);
    }
  }

  // Fetch a single story by ID
  async findOne(id: number): Promise<Story> {
    const story = await this.storyRepository.findOneBy({ id });
    if (!story) {
      throw new NotFoundException(`Story with ID ${id} not found`);
    }
    return story;
  }

  // Create a new story
  async create(data: story_forms_dto){
    const newStory = this.storyRepository.create(data);
    return this.storyRepository.save(newStory);
  }

  // Update a story by ID
  async update(id: number, data: Partial<Story>): Promise<Story> {
    const story = await this.findOne(id); // Ensure the story exists
    Object.assign(story, data); // Merge the updated fields
    return this.storyRepository.save(story);
  }

  // Delete a story by ID
  async delete(id: number): Promise<void> {
    const result = await this.storyRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Story with ID ${id} not found`);
    }
  }
}