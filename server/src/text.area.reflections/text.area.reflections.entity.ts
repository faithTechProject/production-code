import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class TextAreaReflections {
    @PrimaryColumn()
    id: number;

    @Column()
    category: string;

    @Column()
    page: string;
    
    @Column()
    entry_pos: number;

    @Column()
    reply: string;
}