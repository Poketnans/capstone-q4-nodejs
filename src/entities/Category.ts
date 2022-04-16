import  Project  from "./Project";
import  Course  from "./Course";

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

  @Column({ length: 50, unique: true  })
  name: string;

  @OneToMany(() => Course, (oneCourse) => oneCourse.id_category , {
	  eager: true
  })
  course_list: Course[];

  @OneToMany(() => Project, (oneProject) => oneProject.id , {
	eager: true
  })
  project_list: Project[];

}
