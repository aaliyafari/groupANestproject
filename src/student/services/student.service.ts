import { Injectable } from '@nestjs/common';
import { isPort } from 'class-validator';
import { StudentData } from '../models/student.interface';
import { StudentDataEntity } from '../models/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from, Observable } from 'rxjs';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentDataEntity)
    private readonly StudentDataRepository: Repository<StudentDataEntity>,
  ) {}

  createStudentRecord(student_Data: StudentData): Observable<StudentData> {
    return from(this.StudentDataRepository.save(student_Data));
  }

 
}
