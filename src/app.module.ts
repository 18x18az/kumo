import { Module } from '@nestjs/common'
import { MercuriusDriver, MercuriusDriverConfig } from '@nestjs/mercurius'
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path'
import { TeamModule } from './features/team/team.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule } from '@nestjs/config'
import { ConnectionModule } from './connection/connection.module'
import { StageModule } from './features/stage/stage.module'

@Module({
  imports: [
    GraphQLModule.forRoot<MercuriusDriverConfig>({
      driver: MercuriusDriver,
      subscription: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      graphiql: process.env.NODE_ENV !== 'production'
    }),
    TeamModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ConnectionModule,
    StageModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mssql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT ?? '10225'),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'prod',
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: true,
        ssl: true,
        retryWrites: false,
        cache: true,
        idleTimeoutMillis: 30000
      })
    })
  ]
})
export class AppModule {}
