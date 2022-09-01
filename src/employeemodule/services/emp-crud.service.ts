/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

import { EmpCrudEntity } from 'src/models/post.entity';

import { EmpCrud } from 'src/models/postinterface';
@Injectable()
export class EmpCrudService {
  constructor(
    @InjectRepository(EmpCrudEntity)
    private readonly empCrudRepository: Repository<EmpCrudEntity>
  ) {}
  createPost(empPost: EmpCrud): Observable<EmpCrud> {
    return from(this.empCrudRepository.save(empPost));
  }
  getEmployeeData() {
    return from(this.empCrudRepository.find());
  }
  //get All students Data
  getAllEmployee() {
    return from(this.empCrudRepository.find());
  }

  // find employee by uuid
  findEmployeeById(id: number): Observable<EmpCrud> {
    return from(this.empCrudRepository.findOneBy({ id }));
  }

  // update employee by ID
  updateEmployeeRecord(id: number, empPost: EmpCrud): Observable<UpdateResult> {
    return from(this.empCrudRepository.update(id, empPost));
  }

  // updatePatchPost(id: number, empPost: EmpCrud): Observable<UpdateResult> {
  //   return from(this.empCrudRepository.update(id, empPost));
  // }
  updateSomeData(id: number, empPost: EmpCrud): Observable<UpdateResult> {
    return from(this.empCrudRepository.update(id, empPost));
  }

  //delete employee by id
  deleteEmployeeRecord(id: number): Observable<DeleteResult> {
    return from(this.empCrudRepository.delete(id));
  }
}
