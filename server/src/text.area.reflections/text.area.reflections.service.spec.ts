import { Test, TestingModule } from '@nestjs/testing';
import { TextAreaReflectionsService } from './text.area.reflections.service';

describe('TextAreaReflectionsService', () => {
  let service: TextAreaReflectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TextAreaReflectionsService],
    }).compile();

    service = module.get<TextAreaReflectionsService>(TextAreaReflectionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
