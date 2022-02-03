import { Module } from '@nestjs/common';
import { EngineApiService } from './engine-api.service';
import { EngineApiController } from './engine-api.controller';
import { InferenceEngine } from 'src/common/engine-core';


@Module({
  controllers: [EngineApiController],
  providers: [EngineApiService,InferenceEngine]
})
export class EngineApiModule {}
