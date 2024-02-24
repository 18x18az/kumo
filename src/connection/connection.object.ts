import { Field, ObjectType, registerEnumType } from '@nestjs/graphql'

export enum ConnectionStatus {
  REGULAR = 'REGULAR',
  AUTHORIZED = 'AUTHORIZED'
}

registerEnumType(ConnectionStatus, { name: 'ConnectionStatus' })

@ObjectType()
export class Connection {
  @Field()
    status: ConnectionStatus
}
