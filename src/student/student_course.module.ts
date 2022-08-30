import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentCourseEntity } from './models/student_course.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentCourseEntity])],
})
export class StudentCourseModule {}
