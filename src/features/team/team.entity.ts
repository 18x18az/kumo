import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { Inspection } from './team.interface'

@Entity()
export class TeamEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    number: string

  @Column({ default: 0 })
    rank: number

  @Column({ enum: Inspection, type: 'simple-enum', default: Inspection.NOT_HERE })
    checkin: Inspection
}
