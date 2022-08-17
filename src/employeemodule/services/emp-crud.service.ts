/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';

import { EmpCrudEntity } from 'src/models/post.entity';

import { EmpCrud } from 'src/models/postinterface';
@Injectable()
export class EmpCrudService {
  constructor(
    @InjectRepository(EmpCrudEntity)
    private readonly empCrudRepository: Repository<EmpCrudEntity>,
  ) {}
  createPost(empPost: EmpCrud): Observable<EmpCrud> {
    return from(this.empCrudRepository.save(empPost));
  }
}
