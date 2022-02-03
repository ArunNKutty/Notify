import { Test, TestingModule } from '@nestjs/testing';
import { EngineApiService } from './engine-api.service';

describe('EngineApiService', () => {
  let service: EngineApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EngineApiService],
    }).compile();

    service = module.get<EngineApiService>(EngineApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
