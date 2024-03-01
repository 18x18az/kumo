import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { MatchStatus, Round } from './match.interfaces'

@InputType('SittingInput')
@ObjectType()
export class Sitting {
  @Field(() => Int)
    id: number

  @Field(() => Int)
    sitting: number

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

  @Field(() => [String])
    red: string[]

  @Field(() => [String])
    blue: string[]
}
