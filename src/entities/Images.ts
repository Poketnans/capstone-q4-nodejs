import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('images_profile')
export default class Images {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  mimetype: string;

  @Column()
  name: string;

  @Column()
  binary: string;
}
