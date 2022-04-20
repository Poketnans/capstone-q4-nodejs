/* eslint-disable import/no-cycle */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import User from './User';
import Course from './Course';

@Entity('courses_review')
export default class CourseReview {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 280 })
  comment: string;

  @Column({ type: 'integer' })
  rating: number;

  @Column({ unique: true })
  hash_user_course: string;

  @ManyToOne(() => Course)
  @JoinColumn({
    name: 'id_course',
    referencedColumnName: 'id',
  })
  course: Course;

  @ManyToOne(() => User)
  @JoinColumn({
    name: 'id_user',
    referencedColumnName: 'id',
  })
  user: User;
}
