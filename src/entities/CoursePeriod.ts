import { Courses } from "./Courses";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";

@Entity("courses_period")
export default class CoursePeriod {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 10 })
  name: string;

  @OneToMany(() => Courses, (course) => course.id)
  course_list: Courses [];
}