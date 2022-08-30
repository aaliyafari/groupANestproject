import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToOne,
} from 'typeorm';
import { StudentDataEntity } from './student.entity';
@Entity('course')
export class CourseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  course_name: string;

  @ManyToMany(() => StudentDataEntity)
  @JoinTable()
  student: StudentDataEntity[];
}
