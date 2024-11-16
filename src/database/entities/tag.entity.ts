// src/entities/tag.entity.ts
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostTag } from './index';

@Entity()
export class Tag {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true, length: 50 })
    name: string;

    @OneToMany(() => PostTag, (postTag) => postTag.tag)
    postTags: PostTag[];
}
