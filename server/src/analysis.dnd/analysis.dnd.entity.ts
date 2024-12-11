import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Analysis {
    @PrimaryColumn()
    id: number;

    @Column()
    page: string;

    @Column()
    brainstorm_id: number;

    @Column()
    brainstorm_table_id: number;

    @Column()
    explanation: string;

    @Column()
    category: string; 
}