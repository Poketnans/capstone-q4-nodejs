/* eslint-disable import/no-cycle */
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from './User';

@Entity('followers')
export default class Follower {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, {nullable: false})
  @JoinColumn({ name: 'id_follower', referencedColumnName: 'id' })
  follower: User;

  @ManyToOne(() => User, { nullable: false })
  @JoinColumn({ name: 'id_following', referencedColumnName: 'id' })
  target: User;
}
