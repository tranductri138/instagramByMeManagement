import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { EnvModule } from './env/env.module';
import { FilesModule } from './files/files.module';
import { QueryingModule } from './querying/querying.module';

@Module({
    imports: [DatabaseModule, EnvModule, FilesModule, QueryingModule]
})
export class AppModule {}
