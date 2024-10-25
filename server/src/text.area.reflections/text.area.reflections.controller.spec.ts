import { Test, TestingModule } from '@nestjs/testing';
import { TextAreaReflectionsController } from './text.area.reflections.controller';

describe('TextAreaReflectionsController', () => {
  let controller: TextAreaReflectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TextAreaReflectionsController],
    }).compile();

    controller = module.get<TextAreaReflectionsController>(TextAreaReflectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
