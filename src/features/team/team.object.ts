import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Inspection } from './team.interface'

@ObjectType()
export class Team {
  @Field(() => Int, { description: 'Unique identifier for the team' })
    id: number

  @Field(() => String, { description: 'The number of the team' })
    number: string

  @Field(() => Int, { description: 'The rank of the team' })
    rank: number

  @Field(() => Inspection, { description: 'The inspection status of the team' })
    inspection: Inspection
}
