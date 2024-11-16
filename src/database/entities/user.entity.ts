import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Comment, Follower, Like, Post } from './index';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    username: string;

    @Column({ unique: true, length: 100 })
    email: string;

    @Column()
    passwordHash: string;

    @Column({ nullable: true, length: 255 })
    profilePictureUrl: string;

    @Column({ type: 'text', nullable: true })
    bio: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Post, (post) => post.user)
    posts: Post[];

    @OneToMany(() => Comment, (comment) => comment.user)
    comments: Comment[];

    @OneToMany(() => Like, (like) => like.user)
    likes: Like[];

    // Quan hệ theo dõi
    @OneToMany(() => Follower, (follower) => follower.follower)
    following: Follower[];

    @OneToMany(() => Follower, (follower) => follower.following)
    followers: Follower[];
}
