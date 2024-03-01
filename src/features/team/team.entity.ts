import { Column, Entity, PrimaryColumn } from 'typeorm'
import { Inspection } from './team.interface'

@Entity()
export class TeamEntity {
  @PrimaryColumn()
    number: string

  @Column({ enum: Inspection, type: 'simple-enum', default: Inspection.NOT_HERE })
    inspection: Inspection
}
