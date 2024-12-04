import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Analysis {
    @PrimaryColumn()
    id: number;

    @Column()
    page_type: string;

    @Column()
    page_name: string;

    @Column()
    solution: string;

    @Column()
    explanation: string;

    @Column()
    category: string; 
}