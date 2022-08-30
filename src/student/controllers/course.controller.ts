/* eslint-disable prettier/prettier */
import { Post, Body, Controller, Get, Param } from '@nestjs/common';

import { Observable } from 'rxjs';

import { ApiTags } from '@nestjs/swagger';
import { CourseService } from '../services/course.service';
import { CousreData } from '../models/course.interface';
import { CousreModel } from '../models/coursesModel.dto';

@ApiTags('Course-api')
@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}
  @Post()
  addCourse(@Body() coursedata: CousreModel): Observable<CousreData> {
    return this.courseService.createCourse(coursedata);
  }

  @Get()
  findCourse(): Observable<CousreData[]> {
    return this.courseService.getAllCourses();
  }
}
