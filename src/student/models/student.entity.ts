import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('student_data')
export class StudentDataEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: '' })
  firstname: string;

  @Column({ default: '' })
  lastname: string;

  @Column({ type: 'int' })
  mobile: number;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  address: string;
}
