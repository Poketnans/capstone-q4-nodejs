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
import Courses from './Courses';
import Followers from './Followers';
import Images from './Images';
import Projects from './Projects';

@Entity('users')
export default class Users {
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

  @OneToOne(() => Images, {
    eager: true,
  })
  @JoinColumn({ name: 'id_image' })
  id_image: string;

  @Column()
  employed: boolean;

  @ManyToMany(() => Projects, (project) => project.contributors, {
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
  projects_participated_in: Projects | Projects[];

  @OneToMany(() => Projects, (project) => project.id_user_owner, {
    eager: true,
  })
  own_projects: Projects[];

  @OneToMany(() => Followers, (follower) => follower.idTarget, {
    eager: true,
  })
  followers: Followers[];

  @OneToMany(() => Followers, (follower) => follower.idFollower, {
    eager: true,
  })
  following: Followers[];

  @OneToMany(() => Courses, (course) => course.id_user_owner, {
    eager: true,
  })
  owned_courses: Courses[];
}
