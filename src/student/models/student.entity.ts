import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Contains, IsInt, Length, IsEmail, IsDate } from 'class-validator';
import { CourseEntity } from './course.entity';
import { StudentCourseEntity } from './student_course.entity';

@Entity('student_data')
export class StudentDataEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: '' })
  firstname: string;

  @Column({ default: '' })
  lastname: string;

  @Column({ type: 'int', default: null })
  mobile: number;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  address: string;

  @ManyToMany(() => CourseEntity, (Course) => Course)
  @JoinTable({ name: 'student_course' })
  course: CourseEntity[];
}
