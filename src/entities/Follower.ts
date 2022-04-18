/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import User from './Users';

@Entity('followers')
export default class Follower {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, (user) => user.following)
  idFollower: string;

  @ManyToOne(() => User, (user) => user.followers)
  idTarget: string;
}
