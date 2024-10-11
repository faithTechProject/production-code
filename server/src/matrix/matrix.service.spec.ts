import { Test, TestingModule } from '@nestjs/testing';
import { MatrixService } from './matrix.service';

describe('SkillMatrixService', () => {
  let service: MatrixService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MatrixService],
    }).compile();

    service = module.get<MatrixService>(MatrixService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
