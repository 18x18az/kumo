import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Stage } from './stage.object'
import { EventStage } from './stage.interface'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '../../auth/auth.guard'
import { StageEntity } from './stage.entity'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

@Resolver(() => Stage)
export class StageResolver {
  constructor (
    @InjectRepository(StageEntity) private readonly stageRepository: Repository<StageEntity>
  ) {}

  @Query(() => Stage)
  async stage (): Promise<Stage> {
    const stage = await this.stageRepository.findOne({})

    if (stage === null) {
      return {
        stage: EventStage.WAITING_FOR_TEAMS
      }
    }

    return {
      stage: stage.value
    }
  }

  @UseGuards(AuthGuard)
  @Mutation(() => Stage)
  async setStage (@Args('stage') stage: EventStage): Promise<Stage> {
    const existing = await this.stageRepository.findOne({})
    if (existing === null) {
      await this.stageRepository.save({ value: stage })
    } else {
      existing.value = stage
      await this.stageRepository.save(existing)
    }
    return {
      stage
    }
  }
}
