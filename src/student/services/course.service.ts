import { ConflictException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CourseEntity } from '../models/course.entity';
import { CousreData } from '../models/course.interface';
import { StudentDataEntity } from '../models/student.entity';
@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(CourseEntity)
    private readonly CourseRepository: Repository<CourseEntity>,
  ) {}
  // Insert Courses to database
  createCourse(course: CousreData): Observable<CousreData> {
    return from(this.CourseRepository.save(course));
  }

  //get All courses Data
  getAllCourses() {
    return from(this.CourseRepository.find());
  }
}
