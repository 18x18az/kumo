import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateTeamInput, Team } from './team.object'
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

  @Mutation(() => [Team])
  async createTeams (@Args('teams', { type: () => [CreateTeamInput] }) teams: Team[]): Promise<TeamEntity[]> {
    return await this.teamRepository.save(teams)
  }
}
