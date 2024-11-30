import { Test, TestingModule } from '@nestjs/testing';
import { AnalysisDndService } from './analysis.dnd.service';

describe('AnalysisDndService', () => {
  let service: AnalysisDndService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AnalysisDndService],
    }).compile();

    service = module.get<AnalysisDndService>(AnalysisDndService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
