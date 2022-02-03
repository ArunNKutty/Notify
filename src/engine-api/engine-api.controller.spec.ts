import { Test, TestingModule } from '@nestjs/testing';
import { EngineApiController } from './engine-api.controller';
import { EngineApiService } from './engine-api.service';

describe('EngineApiController', () => {
  let controller: EngineApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EngineApiController],
      providers: [EngineApiService],
    }).compile();

    controller = module.get<EngineApiController>(EngineApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
