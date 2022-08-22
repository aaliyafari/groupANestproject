import { Injectable } from '@nestjs/common';
import { isPort } from 'class-validator';
import { StudentData } from '../models/student.interface';
import { StudentDataEntity } from '../models/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
// import { CreateStudentModel } from '../models/student.Model';
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

  // find students by uuid
  findStudentsById(id: string): Observable<StudentData> {
    return from(this.StudentDataRepository.findOneBy({ id }));
  }

  // update student by ID
  updateStudentRecord(
    id: string,
    student_Data: StudentData,
  ): Observable<UpdateResult> {
    return from(this.StudentDataRepository.update(id, student_Data));
  }
  // update some details of student
  updateSomeData(
    id: string,
    student_Data: StudentData,
  ): Observable<UpdateResult> {
    return from(this.StudentDataRepository.update(id, student_Data));
  }
  //delete student by id
  deleteStudentRecord(id: string): Observable<DeleteResult> {
    return from(this.StudentDataRepository.delete(id));
  }

  uploadFiles(student_Data: StudentData): Observable<StudentData> {
    return from(this.StudentDataRepository.save(student_Data));
  }
}
