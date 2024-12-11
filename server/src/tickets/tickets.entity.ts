import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Tickets {
    @PrimaryColumn()
    id: number;

    @Column()
    status: string;

    @Column()
    row_index: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    assigned_to: string;

    @Column()
    date_created: string;

    @Column()
    date_due: string;

    @Column()
    sprint: string;

    @Column()
    percent_complete: string;
}