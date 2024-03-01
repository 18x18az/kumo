import { Module } from '@nestjs/common'
import { SittingResolver } from './match.resolver'
import { MatchService } from './match.service'

@Module({
  providers: [SittingResolver, MatchService]
})
export class MatchModule {}
