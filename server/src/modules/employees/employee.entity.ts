import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  password: string;

  @Column()
  created_at: Date;
}
