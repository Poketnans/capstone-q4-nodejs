/* eslint-disable import/no-cycle */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
} from "typeorm";
import User from "./Users";
import Category from "./Category";

@Entity("projects")
export default class Project {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ length: 180 })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  starts_at: Date;

  @Column()
  ends_at: Date;

  @ManyToOne(() => User, (user) => user.own_projects)
  id_user_owner: User;

  @ManyToMany(() => User, (user) => user.projects_participated_in)
  contributors: User[];

  @ManyToOne(() => Category, (category) => category.id)
  id_category: Category;
}
