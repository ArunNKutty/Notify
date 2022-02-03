import { Module } from '@nestjs/common';
import { EngineApiModule } from './engine-api/engine-api.module';


@Module({
  imports: [EngineApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
