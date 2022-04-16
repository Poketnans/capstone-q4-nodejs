import { Course } from "./Course";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

@Entity("courses_modes")
export default class CourseMode {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 10 })
  name: string;

  @OneToMany(() => Course, (oneCourse) => oneCourse.mode)
  course_list: Course [];

}
