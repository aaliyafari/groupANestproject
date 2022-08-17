import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StudentData } from '../models/student.interface';
@Entity('student_data')
export class StudentDataEntity implements StudentData {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: '' }) 
  firstname: string;

  @Column({ default: '' })
  lastname: string;

  // @Column({ type: 'bigint', default: null })
  @Column({ type: 'int' })
  mobile: number;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  address: string;
}
