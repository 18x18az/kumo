import { Module } from '@nestjs/common'
import { StageResolver } from './stage.resolver'
import { StoreModule } from '../../store/store.module'
import { TeamModule } from '../team/team.module'

@Module({
  imports: [StoreModule, TeamModule],
  providers: [StageResolver]
})
export class StageModule {}
