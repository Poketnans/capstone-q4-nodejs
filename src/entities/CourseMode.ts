import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from "typeorm";

@Entity("courses_modes")
export default class CourseMode {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 10 })
  name: string;

}