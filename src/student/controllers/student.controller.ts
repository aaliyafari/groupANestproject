import { Get, Post, Body, Controller } from '@nestjs/common';
import { StudentData } from '../models/student.interface';
import { StudentDataEntity } from '../models/student.entity';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';
@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Post()
  InsertStudentData(@Body() studentData: StudentData): Observable<StudentData> {
    return this.studentService.createStudentRecord(studentData);
  }
}