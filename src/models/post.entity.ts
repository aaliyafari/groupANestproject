/* eslint-disable prettier/prettier */
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { EmpCrud } from '../models/postinterface';
import { DepartmentPostEntity } from './department.entity';
@Entity('emp_crud1')
export class EmpCrudEntity implements EmpCrud {
  department: string;
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



  @ManyToMany(()=>DepartmentPostEntity,(post)=>post.department)
  @JoinTable()
  post:DepartmentPostEntity[];

}
