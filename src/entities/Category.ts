import  Projects  from "./Projects";
import  Courses  from "./Courses";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from "typeorm";

@Entity("categories")
export default class Category {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Courses, (oneCourse) => oneCourse.id , {
	  eager: true
  })
  course_list: Courses[];

  @OneToMany(() => Projects, (oneProject) => oneProject.id , {
	eager: true
  })
  project_list: Projects[];

}