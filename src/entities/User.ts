/* eslint-disable import/no-cycle */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import Course from './Course';
import Follower from './Follower';
import Image from './Image';
import Project from './Project';

@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  employed: boolean;

  @ManyToMany(() => Project, (project) => project.contributors, {
    eager: true,
  })
  @JoinTable({
    name: 'user_projects',
    joinColumn: {
      name: 'id_user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_project',
      referencedColumnName: 'id',
    },
  })
  projects_participated_in: Project[];

  @OneToMany(() => Project, (project) => project.id_user_owner, {
    eager: true,
  })
  own_projects: Project[];

  @OneToMany(() => Follower, (follower) => follower.idTarget, {
    eager: true,
  })
  followers: Follower[];

  @OneToMany(() => Follower, (follower) => follower.idFollower, {
    eager: true,
  })
  following: Follower[];

  @ManyToMany(() => Course, (course) => course.id, {
    eager: true,
  })
  @JoinTable({
    name: 'users_courses',
    joinColumn: {
      name: 'id_user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_course',
      referencedColumnName: 'id',
    },
  })
  courses: [];

  @OneToMany(() => Course, (course) => course.id_user_owner, {
    eager: true,
  })
  owned_courses: Course[];

  @OneToOne(() => Image, (image) => image.id, {
    eager: true,
  })
  @JoinColumn({ name: 'id_image' })
  id_image: string;
}
