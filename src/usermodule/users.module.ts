import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/user.entity';
// import { Role } from './typeorm/role.entity';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Post]), PostModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
