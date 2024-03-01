import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { MatchStatus, Round } from './match.interfaces'
import { Team } from '../team/team.object'

@InputType()
@ObjectType()
class MatchBase {
  @Field(() => Int)
    id: number

  @Field(() => Round)
    round: Round

  @Field(() => Int)
    contest: number

  @Field(() => Int)
    match: number

  @Field()
    field: string

  @Field(() => MatchStatus)
    status: MatchStatus
}

@InputType()
export class MatchStored extends MatchBase {
  @Field(() => [Int])
    red: number[]

  @Field(() => [Int])
    blue: number[]
}

@ObjectType()
export class Match extends MatchBase {
  @Field(() => [Team])
    red: Team[]

  @Field(() => [Team])
    blue: Team[]
}
