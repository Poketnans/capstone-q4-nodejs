/* eslint-disable import/no-cycle */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
} from 'typeorm';
import Users from './Users';

@Entity('projects')
export default class Projects {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ length: 180 })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  starts_at: Date;

  @Column()
  ends_at: Date;

  @ManyToOne(() => Users, (user) => user.own_projects)
  id_user_owner: Users;

  @ManyToMany(() => Users, (user) => user.projects_participated_in)
  contributors: Promise<Users[]>;
}
