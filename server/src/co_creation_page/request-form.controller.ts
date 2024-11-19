import { Controller, Get, Post, Param, Body, Patch, Delete, Query } from '@nestjs/common';
import { RequestFormService } from './request-form.service';
import { CoCreationEntity } from './request-form.entity';
import { update_co_creation_dto } from './dto/update_co_creation-dto';


@Controller('co_creation')
export class RequestFormController {
  constructor(private readonly requestFormService: RequestFormService) {}

  @Get()
  async findAll(): Promise<CoCreationEntity[]> {
    return this.requestFormService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<CoCreationEntity> {
    return this.requestFormService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<CoCreationEntity>): Promise<CoCreationEntity> {
    return this.requestFormService.create(data);
  }

  @Patch()
  updateEntry(@Query("id") id:number, @Body() update_input: update_co_creation_dto){
    return this.requestFormService.input(id, update_input)
  }
  

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.requestFormService.delete(id);
  }
}
