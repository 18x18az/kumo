import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Team {
  @Field(() => Int, { description: 'Unique identifier for the team' })
    id: number
}
