import { Test, TestingModule } from '@nestjs/testing';
import { SkillMatrixController } from './skill-matrix.controller';

describe('SkillMatrixController', () => {
  let controller: SkillMatrixController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillMatrixController],
    }).compile();

    controller = module.get<SkillMatrixController>(SkillMatrixController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
