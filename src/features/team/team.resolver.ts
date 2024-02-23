import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateTeamInput, Team } from './team.object'
import { InjectRepository } from '@nestjs/typeorm'
import { TeamEntity } from './team.entity'
import { Repository } from 'typeorm'
import { Inspection } from './team.interface'
import { NotFoundException } from '@nestjs/common'

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

  @Mutation(() => Team)
  async updateInspection (@Args('team', { type: () => String }) number: string, @Args('inspection', { type: () => Inspection }) inspection: Inspection): Promise<TeamEntity> {
    const team = await this.teamRepository.findOneBy({ number })
    if (team === null) {
      throw new NotFoundException('Team not found')
    }
    team.inspection = inspection
    return await this.teamRepository.save(team)
  }
}
