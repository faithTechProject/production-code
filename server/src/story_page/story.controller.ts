import { Controller, Get, Post, Patch, Delete, Body, Param, Query } from '@nestjs/common';
import { StoryService } from './story.service';
import { Story } from './story.entity';
import { update_story_forms_dto } from './dto/update_story_forms-dto';
import { story_forms_dto } from './dto/story_forms-dto'


@Controller('story') // Base route: /story
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  // Fetch all stories
  @Get()
  async findAll(): Promise<Story[]> {
    return this.storyService.findAll();
  }

  // Fetch a single story by ID
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Story> {
    return this.storyService.findOne(id);
  }

  // Create a new story
  @Post()
  async create(@Body() data: story_forms_dto) {
      return this.storyService.create(data);
      console.log(data)
  }

  // Update a story by ID
  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<Story>,
  ): Promise<Story> {
    return this.storyService.update(id, data);
  }

  // Delete a story by ID
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.storyService.delete(id);
  }
}