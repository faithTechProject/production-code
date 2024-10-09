import { Test, TestingModule } from '@nestjs/testing';
import { SkillMatrixService } from './skill-matrix.service';

describe('SkillMatrixService', () => {
  let service: SkillMatrixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SkillMatrixService],
    }).compile();

    service = module.get<SkillMatrixService>(SkillMatrixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
