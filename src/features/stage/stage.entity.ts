import { Entity, PrimaryColumn } from 'typeorm'
import { EventStage } from './stage.interface'

@Entity()
export class StageEntity {
  @PrimaryColumn({ type: 'simple-enum', enum: EventStage })
    value: EventStage
}
