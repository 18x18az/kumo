
import { Query, Resolver } from '@nestjs/graphql'
import { Connection, ConnectionStatus } from './connection.object'
import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '../auth/auth.guard'

@Resolver(() => Connection)
export class ConnectionResolver {
  @UseGuards(AuthGuard)
  @Query(() => Connection)
  async connection (): Promise<Connection> {
    return {
      status: ConnectionStatus.REGULAR
    }
  }
}
