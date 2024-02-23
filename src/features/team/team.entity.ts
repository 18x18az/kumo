import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class TeamEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    number: string
}
