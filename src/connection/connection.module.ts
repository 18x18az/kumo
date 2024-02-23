import { Module } from '@nestjs/common'
import { ConnectionResolver } from './connection.resolver'

@Module({
  providers: [ConnectionResolver]
})
export class ConnectionModule {}
