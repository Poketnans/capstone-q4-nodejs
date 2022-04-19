import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('images_profile')
export default class Image {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  mimetype: string;

  @Column()
  name: string;

  @Column()
  binary: string;
}
