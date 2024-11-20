import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('co_creation') // Table name in the database
export class CoCreationEntity {
  @PrimaryColumn() // Maps to "id" as SERIAL
  id: number;

  @Column() // Maps to "category" as character varying
  category: string;

  @Column() // Maps to "page" as character varying
  page: string;

  @Column() // Maps to "data" as character varying
  data: string;
}
