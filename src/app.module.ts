import { Module } from '@nestjs/common'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { TeamModule } from './features/team/team.module'

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      subscription: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      graphiql: true
    }),
    TeamModule
  ]
})
export class AppModule {}
