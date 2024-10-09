import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class SkillMatrix {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    skills: string;

    @Column()
    past_experiences: string;

    @Column()
    areas_for_growth: string;
}