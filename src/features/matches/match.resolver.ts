import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { Match, MatchStored } from './match.object'
import { MatchService } from './match.service'

@Resolver(() => Match)
export class MatchResolver {
  constructor (private readonly service: MatchService) {}

  @Query(() => [Match])
  matches (): MatchStored[] {
    return this.service.getMatches()
  }

  @Mutation(() => [MatchStored]) setMatches (
    @Args('matches', { type: () => [MatchStored] }) matches: MatchStored[]
  ): MatchStored[] {
    return this.service.setMatches(matches)
  }
}
