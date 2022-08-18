/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EmpCrud } from '../models/postinterface';
@Entity('emp_crud')
export class EmpCrudEntity implements EmpCrud {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  // @Column({ type: 'bigint', default: null })
  @Column()
  mobile: number;

  @Column()
  salary: number;

  @Column()
  email: string;

  @Column()
  address: string;
}
