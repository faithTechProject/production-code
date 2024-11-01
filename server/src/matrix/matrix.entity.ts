import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Matrix {
    @PrimaryColumn()
    id: number;

    @Column()
    category: string;

    @Column()
    page: string;

    @Column()
    entry_pos: number;

    @Column('jsonb')
    input: string[];

    @Column('text', {array: true})
    tasks_rows: string[];

    @Column('text', {array: true})
    roles_columns: string[];

    @Column('jsonb')
    rci_input: string[];
}