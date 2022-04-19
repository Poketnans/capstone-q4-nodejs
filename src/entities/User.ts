/* eslint-disable import/no-cycle */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from "typeorm";
import Course from "./Courses";
import Follower from "./Followers";
import Image from "./Images";
import Project from "./Projects";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  employed: boolean;

  @ManyToMany(() => Project, {
    eager: true,
  })
  @JoinTable({
    name: "user_projects",
    joinColumn: {
      name: "id_user",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "id_project",
      referencedColumnName: "id",
    },
  })
  projects_participated_in: Project[];

  @OneToMany(() => Project, (project) => project.user_owner, {
    eager: true,
  })
  own_projects: Project[];

  @OneToMany(() => Follower, (follower) => follower.target, {
    eager: true,
  })
  followers: Follower[];

  @OneToMany(() => Follower, (follower) => follower.follower, {
    eager: true,
  })
  following: Follower[];

  @ManyToMany(() => Course, {
    eager: true,
  })
  @JoinTable({
    name: "users_courses",
    joinColumn: {
      name: "id_user",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "id_course",
      referencedColumnName: "id",
    },
  })
  courses: [];

  @OneToMany(() => Course, (course) => course.id_user_owner, {
    eager: true,
  })
  owned_courses: Course[];

  @OneToOne(() => Image, {
    eager: true,
  })
  @JoinColumn({ name: "id_image", referencedColumnName: "id" })
  id_image: Image;
}
