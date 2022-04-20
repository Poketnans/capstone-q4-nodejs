import { Course } from "./Course";
import { User } from "./User";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";

@Entity("courses_review")
export default class CourseReview {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 280 })
  comment: string;

  @Column({type : "integer"})
  rating: number ;

  @Column({ unique: true })
  hash_user_course: string;

  @ManyToOne(() => Course)
  @JoinColumn({
        name: "id_course",
        referencedColumnName: "id",
    })
  course: Course


  @ManyToOne(() => User, (oneUser) => oneUser.id_user)
  @JoinColumn({
        name: "id_user",
        referencedColumnName: "id",
    })
  user: User
}