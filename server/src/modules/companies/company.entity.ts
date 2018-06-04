import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Company {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    name: string;

    @Column()
    isActive: boolean;

    @Column()
    branch: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    last_update: Date;
    
}