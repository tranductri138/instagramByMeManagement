import { Entity, PrimaryColumn, ManyToOne } from 'typeorm';
import { Post, Tag } from './index';

@Entity()
export class PostTag {
    @PrimaryColumn()
    postId: number;

    @PrimaryColumn()
    tagId: number;

    @ManyToOne(() => Post, (post) => post.postTags, { onDelete: 'CASCADE' })
    post: Post;

    @ManyToOne(() => Tag, (tag) => tag.postTags, { onDelete: 'CASCADE' })
    tag: Tag;
}
