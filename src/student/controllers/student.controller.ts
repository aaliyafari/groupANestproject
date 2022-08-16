import {
  Get,
  Post,
  Body,
  Controller,
  Param,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { StudentData } from '../models/student.interface';
import { StudentDataEntity } from '../models/student.entity';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Post()
  InsertStudentData(@Body() studentData: StudentData): Observable<StudentData> {
    return this.studentService.createStudentRecord(studentData);
  }
  @Get()
  getAllStudentData(): Observable<StudentData[]> {
    return this.studentService.getAllStudents();
  }
  @Get(':id')
  getStudentByID(@Param('id') id: number) {
    return this.studentService.findStudentsById(id);
  }
}
