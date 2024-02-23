
import { Query, Resolver } from '@nestjs/graphql'
import { Connection, ConnectionStatus } from './connection.object'

@Resolver(() => Connection)
export class ConnectionResolver {
  @Query(() => Connection)
  async connection (): Promise<Connection> {
    return {
      status: ConnectionStatus.REGULAR
    }
  }
}
