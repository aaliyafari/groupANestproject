import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { StudentCourseData } from './student_course.interface';
@Entity('student_course')
export class StudentCourseEntity extends StudentCourseData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column()
  // studentId: string;

  // @Column()
  // courseId: string;
}
