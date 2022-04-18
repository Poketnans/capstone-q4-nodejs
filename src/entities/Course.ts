import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import Category from './Category';
import CourseMode from './CourseMode';
import CoursePeriod from './CoursePeriod';
import Review from './UserReview';
import User from './Users';

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

  @ManyToOne(() => User, (user) => user.owned_courses)
  id_user_owner: string;

  @OneToMany(() => CourseMode, (courseMode) => courseMode.id)
  id_mode: CourseMode;

  @OneToMany(() => CoursePeriod, (coursePeriod) => coursePeriod.id)
  id_period: CoursePeriod;

  @ManyToOne(() => Category, (category) => category.id)
  id_category: Category[];

  @OneToMany(() => Review, (userReview) => userReview.id_course)
  reviews: [];
}
