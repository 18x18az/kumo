import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class StoreEntity {
  @PrimaryColumn()
    key: string

  @Column()
    value: string
}
