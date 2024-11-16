import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';
import { FilesModule } from './files/files.module';
import { QueryingModule } from './querying/querying.module';
import { UsersModule } from './domains/users/users.module';
import { PostModule } from './domains/post/post.module';
import { CommentsModule } from './domains/comments/comments.module';
import { LikesModule } from './domains/likes/likes.module';
import { FeedsModule } from './domains/feeds/feeds.module';
import { ExploreModule } from './domains/explore/explore.module';

@Module({
    imports: [
        DatabaseModule,
        EnvModule,
        FilesModule,
        QueryingModule,
        UsersModule,
        PostModule,
        CommentsModule,
        LikesModule,
        FeedsModule,
        ExploreModule
    ]
})
export class AppModule {}
