import { Query, Resolver } from '@nestjs/graphql'
import { Team } from './team.object'
import { InjectRepository } from '@nestjs/typeorm'
import { TeamEntity } from './team.entity'
import { Repository } from 'typeorm'

@Resolver(() => Team)
export class TeamResolver {
  constructor (@InjectRepository(TeamEntity) private readonly teamRepository: Repository<TeamEntity>) {}

  @Query(() => [Team])
  async teams (): Promise<TeamEntity[]> {
    return await this.teamRepository.find()
  }
}
