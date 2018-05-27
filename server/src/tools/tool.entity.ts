import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Tool {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({
    nullable: true,
  })
  in_use: string;

  @Column({
    nullable: true,
  })
  since: Date;

  @Column()
  created_at: Date;
}
