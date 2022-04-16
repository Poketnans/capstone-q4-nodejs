/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import Users from './Users';

@Entity('followers')
export default class Followers {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @ManyToOne(() => Users, (user) => user.followers)
  idFollower: string;

  @ManyToOne(() => Users, (user) => user.following)
  idTarget: string;
}
