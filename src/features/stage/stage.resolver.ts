import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Stage } from './stage.object'
import { EventStage } from './stage.interface'
import { Logger, UseGuards } from '@nestjs/common'
import { AuthGuard } from '../../auth/auth.guard'
import { StoreService } from '../../store/store.service'

@Resolver(() => Stage)
export class StageResolver {
  private readonly logger = new Logger(StageResolver.name)
  constructor (
    private readonly store: StoreService
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
    await this.store.set('stage', stage)
    return {
      stage
    }
  }
}
