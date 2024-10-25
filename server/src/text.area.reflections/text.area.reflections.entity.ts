import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class TextAreaReflections {
    @PrimaryColumn()
    id: number;

    @Column()
    page: string;
    
    @Column()
    entry_pos: number;

    @Column({nullable: true})
    title: string;

    @Column({nullable: true})
    subtitle: string;

    @Column()
    reply: string;
}