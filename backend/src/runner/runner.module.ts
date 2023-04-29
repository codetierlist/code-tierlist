import { Module } from '@nestjs/common';
import { ServiceService } from './runner.service';

@Module({
  providers: [ServiceService]
})
export class RunnerModule {}
