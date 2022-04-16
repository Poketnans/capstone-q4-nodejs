import { Courses } from "./Courses";
import { User } from "./Users";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
} from "typeorm";

@Entity("users_review")
export default class Review {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 280 })
  comment: string;

  @Column({type : "integer"})
  rating: number ;

  @Column({unique: true })
  hash_user_course: string;

  @ManyToOne(() => Courses, (course) => course.idCourse)
  id_course: Courses;

  @ManyToOne(() => User, (oneUser) => oneUser.idUser)
  id_user: User;

}
