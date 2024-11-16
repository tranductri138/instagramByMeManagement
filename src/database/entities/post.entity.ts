import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    OneToMany
} from 'typeorm';
import { User, Comment, Like, PostTag } from './index';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
    user: User;

    @Column({ type: 'varchar', length: 255 })
    mediaUrl: string;

    @Column({ type: 'text', nullable: true })
    caption: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Comment, (comment) => comment.post)
    comments: Comment[];

    @OneToMany(() => Like, (like) => like.post)
    likes: Like[];

    @OneToMany(() => PostTag, (postTag) => postTag.post)
    postTags: PostTag[];
}
