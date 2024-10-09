import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class Reflection {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    response: string;
}