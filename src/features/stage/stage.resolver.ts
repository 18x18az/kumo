import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Stage } from './stage.object'
import { EventStage } from './stage.interface'
import { Logger, UseGuards } from '@nestjs/common'
import { AuthGuard } from '../../auth/auth.guard'
import { StoreService } from '../../store/store.service'
import { TeamService } from '../team/team.service'

@Resolver(() => Stage)
export class StageResolver {
  private readonly logger = new Logger(StageResolver.name)
  constructor (
    private readonly store: StoreService,
    private readonly teamService: TeamService
  ) {}

  @Query(() => Stage)
  async stage (): Promise<Stage> {
    const stage = await this.store.get('stage', EventStage.WAITING_FOR_TEAMS) as EventStage
    return {
      stage
    }
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Stage)
  async setStage (@Args('stage', { type: () => EventStage }) stage: EventStage): Promise<Stage> {
    this.logger.log(`Setting stage to ${stage}`)
    const currentStage = await this.store.get('stage', EventStage.WAITING_FOR_TEAMS) as EventStage
    await this.store.set('stage', stage)
    const isEarly = stage === EventStage.WAITING_FOR_TEAMS || stage === EventStage.CHECKIN
    const wasLate = currentStage !== EventStage.WAITING_FOR_TEAMS && currentStage !== EventStage.CHECKIN
    if (isEarly && wasLate) {
      this.logger.log('Resetting teams')
      await this.teamService.resetTeams()
    }
    return {
      stage
    }
  }
}
