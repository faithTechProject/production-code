import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Reflection {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    response: string;

}