import { Field, InputType, Int, ObjectType } from '@nestjs/graphql'
import { Inspection } from './team.interface'

@InputType()
@ObjectType()
export class CreateTeamInput {
  @Field(() => String, { description: 'The number of the team' })
    number: string
}
@ObjectType()
export class Team extends CreateTeamInput {
  @Field(() => Int, { description: 'The rank of the team' })
    rank: number

  @Field(() => Inspection, { description: 'The inspection status of the team' })
    checkin: Inspection
}
