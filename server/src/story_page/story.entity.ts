import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('story') // Table name in the database
export class Story {
  @PrimaryGeneratedColumn() // Primary key
  id: number;

  @Column({ nullable: true })  // User's name
  user_name: string;

  @Column() // User's email
  email: string;

  @Column({ nullable: true }) // Whether the project is online or part of a community
  project_state: string;

  @Column({ nullable: true }) // Project challenges or details
  challenges: string;

  @Column({ nullable: true }) // Current project status
  project_status: string;

  @Column({ type: 'text', nullable: true }) // Project summary
  project_summary: string;

  @Column({ nullable: true }) // Project website link
  project_link: string;

  @Column({ nullable: true }) // Links or references to project images
  project_images: string;

  @Column({ nullable: true }) // How the program impacted the user
  project_fulfillment: string;

  @Column({ type: 'text', nullable: true }) // Additional information
  additional_info: string;

  @Column({ nullable: true }) // Whether the user consents to share their information
  share_info: string;

  @Column({ type: 'text', nullable: true }) // Reflection question response
  reflection: string;
}