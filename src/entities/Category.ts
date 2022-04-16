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

  @OneToMany(() => Course, (course) => course.id_category , {
	  eager: true
  })
  course_list: Course[];

  @OneToMany(() => Project, (project) => project.id , {
	eager: true
  })
  project_list: Project[];

}
