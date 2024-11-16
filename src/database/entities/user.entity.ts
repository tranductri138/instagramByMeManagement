import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Comment, Follower, Like, Post } from './index';
import { Role } from 'auth/roles/enums/role.enum';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    username: string;

    @Column({ unique: true, length: 100 })
    email: string;

    @Exclude()
    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        enumName: 'role_enum',
        default: Role.USER
    })
    role: Role;

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

    @OneToMany(() => Follower, (follower) => follower.follower)
    following: Follower[];

    @OneToMany(() => Follower, (follower) => follower.following)
    followers: Follower[];
}
