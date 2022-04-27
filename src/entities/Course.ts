/* eslint-disable import/no-cycle */
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Category from './Category';
import CourseMode from './CourseMode';
import CoursePeriod from './CoursePeriod';
import Review from './CourseReview';
import User from './User';

@Entity('courses')
export default class Course {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 50, unique: true })
  title: string;

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

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({
    name: 'id_owner_course',
    referencedColumnName: 'id',
  })
  user_owner: User[];

  @ManyToOne(() => CourseMode, { nullable: false })
  @JoinColumn({ name: 'id_mode', referencedColumnName: 'id' })
  mode: CourseMode;

  @ManyToOne(() => CoursePeriod, { nullable: false })
  @JoinColumn({ name: 'id_period', referencedColumnName: 'id' })
  period: CoursePeriod;

  @ManyToOne(() => Category, { nullable: false })
  @JoinColumn({ name: 'id_category', referencedColumnName: 'id' })
  category: Category[];

  @OneToMany(() => Review, (userReview) => userReview.id)
  reviews: [];
}
