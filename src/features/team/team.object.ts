import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Team {
  @Field(() => Int, { description: 'Unique identifier for the team' })
    id: number

  @Field(() => String, { description: 'The number of the team' })
    number: string
}
