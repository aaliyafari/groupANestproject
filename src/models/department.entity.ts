/* eslint-disable prettier/prettier */
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from 'typeorm';
import { EmpCrudEntity } from './post.entity';
@Entity('department')
export class DepartmentPostEntity{
    @PrimaryGeneratedColumn()
    id: number;
    @Column({default: ''})
    department: string;
    @ManyToMany(()=>EmpCrudEntity,(employeeDetails)=>employeeDetails)
    // @JoinTable()
    employeeDetails:EmpCrudEntity[];
}




