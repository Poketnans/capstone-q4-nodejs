import { Course } from "./Course";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

@Entity("courses_period")
export default class CoursePeriod {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 10 , unique: true})
  name: string;

  @OneToMany(() => Course, (oneCourse) => oneCourse.period)
  course_list: Course [];
}
