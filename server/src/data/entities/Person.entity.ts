import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class PersonEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({ unique: true })
  name: string;

  constructor() {
    super();
  }
}
