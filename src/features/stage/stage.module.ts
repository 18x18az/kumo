import { Module } from '@nestjs/common'
import { StageResolver } from './stage.resolver'
import { StoreModule } from '../../store/store.module'

@Module({
  imports: [StoreModule],
  providers: [StageResolver]
})
export class StageModule {}
