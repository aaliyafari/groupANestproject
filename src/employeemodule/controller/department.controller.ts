/* eslint-disable prettier/prettier */
import {  Body, Controller,Get, Post} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DepartmentPostEntity } from 'src/models/department.entity';
import { DepartmentPost } from 'src/models/department.interface';

import { DepartmentService } from '../services/department.services';


@Controller('department')
export class DepartmentController {
    constructor(private departmentService: DepartmentService) {};
    @Post()
    create(@Body() dept: DepartmentPost): Observable<DepartmentPost> {
      return this.departmentService.createDepartment(dept);
    }
    @Get()
   findDepartment(): Observable<DepartmentPostEntity[]>{
    return this.departmentService.findAllDepartments();
  }
}