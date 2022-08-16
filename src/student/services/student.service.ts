import { Injectable } from '@nestjs/common';
import { isPort } from 'class-validator';
import { StudentData } from '../models/student.interface';
import { StudentDataEntity } from '../models/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(StudentDataEntity)
    private readonly StudentDataRepository: Repository<StudentDataEntity>,
  ) {}
  //Insert student data
  createStudentRecord(student_Data: StudentData): Observable<StudentData> {
    return from(this.StudentDataRepository.save(student_Data));
  }
  //get All students Data
  getAllStudents() {
    return from(this.StudentDataRepository.find());
  }
  findStudentsById(id: number): Observable<StudentDataEntity> {
    return from(this.StudentDataRepository.findOneBy({ id }));
  }

  updateStudentRecord(
    id: number,
    student_Data: StudentData,
  ): Observable<UpdateResult> {
    return from(this.StudentDataRepository.update(id, student_Data));
  }
}
