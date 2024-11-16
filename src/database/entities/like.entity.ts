import { CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Post, User } from './index';

@Entity()
export class Like {
    @PrimaryColumn()
    userId: number;

    @PrimaryColumn()
    postId: number;

    @CreateDateColumn()
    likedAt: Date;

    @ManyToOne(() => User, (user) => user.likes, { onDelete: 'CASCADE' })
    user: User;

    @ManyToOne(() => Post, (post) => post.likes, { onDelete: 'CASCADE' })
    post: Post;
}
