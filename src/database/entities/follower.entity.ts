import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from './index';

@Entity()
export class Follower {
    @PrimaryColumn()
    followerId: number;

    @PrimaryColumn()
    followingId: number;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    followedAt: Date;

    @ManyToOne(() => User, (user) => user.following, { onDelete: 'CASCADE' })
    follower: User;

    @ManyToOne(() => User, (user) => user.followers, { onDelete: 'CASCADE' })
    following: User;
}
