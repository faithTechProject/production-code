import { Test, TestingModule } from '@nestjs/testing';
import { AnalysisDndController } from './analysis.dnd.controller';

describe('AnalysisDndController', () => {
  let controller: AnalysisDndController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnalysisDndController],
    }).compile();

    controller = module.get<AnalysisDndController>(AnalysisDndController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
