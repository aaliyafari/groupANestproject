import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { StudentData } from '../models/student.interface';
import { Contains, IsInt, Length, IsEmail, IsDate } from 'class-validator';
// export enum Cousre {
//   MCA = 'MCA',
//   MBA = 'MBA',
//   MTech = 'MTech',
//   BCS = 'BCS',
// }
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

  // @Column({ type: 'enum', enum: Cousre, default: null })
  // course_name: Cousre;

  // @Column({ default: '' })
  // image: string;
}
