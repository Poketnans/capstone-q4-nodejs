/* eslint-disable import/no-cycle */
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  // OneToMany,
} from 'typeorm';
import Users from './Users';

@Entity('courses')
export default class Courses {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 50, unique: true })
  title: string;

  @ManyToOne(() => Users, (user) => user.id)
  id_user_owner: string;

  @Column()
  address: string;

  @Column()
  starts_at: Date;

  @Column()
  ends_at: Date;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
