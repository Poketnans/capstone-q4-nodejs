import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from "typeorm";

@Entity("courses_period")
export default class CoursePeriod {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 10 })
  name: string;
}