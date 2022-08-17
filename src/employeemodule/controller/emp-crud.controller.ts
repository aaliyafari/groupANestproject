/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from '@nestjs/common';
import { EmpCrudService } from '../services/emp-crud.service';

import { EmpCrud } from 'src/models/postinterface';
import { Observable } from 'rxjs/internal/Observable';
@Controller('demo')
export class EmpCrudController {
  constructor(private empService: EmpCrudService) {}
  @Post()
  create(@Body() post: EmpCrud): Observable<EmpCrud> {
    return this.empService.createPost(post);
  }
  @Get()
  getAllStudentData() {
    return 'Hello';
  }
}
