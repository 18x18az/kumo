import { Query, Resolver } from '@nestjs/graphql'
import { Team } from './team.object'

@Resolver(() => Team)
export class TeamResolver {
  @Query(() => [Team])
  async teams (): Promise<Team[]> {
    return []
  }
}
