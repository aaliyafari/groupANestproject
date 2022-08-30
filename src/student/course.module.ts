import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CourseController } from './controllers/course.controller';
import { CourseEntity } from './models/course.entity';
import { CourseService } from './services/course.service';

@Module({
  imports: [TypeOrmModule.forFeature([CourseEntity])],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
