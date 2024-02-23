import { Module } from '@nestjs/common'
import { TeamResolver } from './team.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TeamEntity } from './team.entity'

@Module({
  imports: [
    TypeOrmModule.forFeature([TeamEntity])
  ],
  providers: [TeamResolver]
})
export class TeamModule {}
