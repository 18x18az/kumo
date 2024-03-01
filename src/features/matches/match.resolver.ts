import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Sitting } from './match.object'
import { MatchService } from './match.service'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '../../auth/auth.guard'

@Resolver(() => Sitting)
export class SittingResolver {
  constructor (private readonly service: MatchService) {}

  @Query(() => [Sitting])
  matches (): Sitting[] {
    return this.service.getMatches()
  }

  @UseGuards((AuthGuard))
  @Mutation(() => [Sitting]) setSittings (
    @Args('sittings', { type: () => [Sitting] }) matches: Sitting[]
  ): Sitting[] {
    return this.service.setMatches(matches)
  }
}
