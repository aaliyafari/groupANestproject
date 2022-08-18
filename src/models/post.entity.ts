/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmpCrud } from '../models/postinterface';
@Entity('emp_crud')
export class EmpCrudEntity implements EmpCrud {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: '' })
  firstname: string;

  @Column({ default: '' })
  lastname: string;

  // @Column({ type: 'bigint', default: null })
  @Column({ type: 'int' })
  mobile: number;

  @Column({ type: 'int' })
  salary: number;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  address: string;
}
