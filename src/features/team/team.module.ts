import { Module } from '@nestjs/common'
import { TeamResolver } from './team.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TeamEntity } from './team.entity'
import { TeamService } from './team.service'

@Module({
  imports: [
    TypeOrmModule.forFeature([TeamEntity])
  ],
  providers: [TeamResolver, TeamService],
  exports: [TeamService]
})
export class TeamModule {}
