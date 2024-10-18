import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Matrix {
    @PrimaryColumn()
    name: string

    @Column('jsonb', { nullable: true })
    data: string[];
}