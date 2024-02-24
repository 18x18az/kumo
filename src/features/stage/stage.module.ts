import { Module } from '@nestjs/common'
import { StageResolver } from './stage.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StageEntity } from './stage.entity'

@Module({
  imports: [TypeOrmModule.forFeature([StageEntity])],
  providers: [StageResolver]
})
export class StageModule {}
