/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DepartmentPostEntity } from 'src/models/department.entity';
import { DepartmentPost } from 'src/models/department.interface';
import { Repository } from 'typeorm';


@Injectable()
export class DepartmentService {
    constructor(
        @InjectRepository(DepartmentPostEntity)
        private readonly departmentPostRepository: Repository<DepartmentPostEntity>
    ){}
    createDepartment(departmentPost: DepartmentPost): Observable<DepartmentPost>{
        return from(this.departmentPostRepository.save(departmentPost));
    }
    findAllDepartments(): Observable<DepartmentPostEntity[]>{
        return from(this.departmentPostRepository.find());
    }
}