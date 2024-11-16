import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { User, Post } from './index';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => Post, (post) => post.comments, { onDelete: 'CASCADE' })
    post: Post;

    @ManyToOne(() => User, (user) => user.comments, { onDelete: 'CASCADE' })
    user: User;

    @Column({ type: 'text' })
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
