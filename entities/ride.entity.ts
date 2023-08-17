import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'organizations' })
export class Ride extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column({type: 'float'})
  public long: number;
  @Column({type: 'float'})
  public lat: number;
}