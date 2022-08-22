/* eslint-disable prettier/prettier */
import {
  Get,
  Post,
  Body,
  Controller,
  Param,
  Put,
  Patch,
  Delete,
  ParseUUIDPipe,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { StudentDataEntity } from '../models/student.entity';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
// import { CreateStudentModel } from '../models/student.Model';
import { StudentData } from '../models/student.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileURLToPath } from 'url';
//import { CreateUserModel } from 'src/product/models/productModel';

@Controller('student')
export class StudentController {
  constructor(private studentService: StudentService) {}
  @Post()
  create(@Body() studentdata: StudentData): Observable<StudentData> {
    return this.studentService.createStudentRecord(studentdata);
  }
  @Get('/allData')
  findPost(): Observable<StudentDataEntity[]> {
    return this.studentService.getAllStudents();
  }
  @Get(':id')
  findPostId(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ): Observable<StudentData> {
    return this.studentService.findStudentsById(id);
  }
  @Put(':id')
  updatePost(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
    @Body() studentdata: StudentData,
  ): Observable<UpdateResult> {
    return this.studentService.updateStudentRecord(id, studentdata);
  }
  @Patch(':id')
  updateSomeData(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
    @Body() studentdata: StudentData,
  ): Observable<UpdateResult> {
    return this.studentService.updateSomeData(id, studentdata);
  }

  @Delete(':id')
  deletePost(
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: string,
  ): Observable<DeleteResult> {
    return this.studentService.deleteStudentRecord(id);
  }
  // // upload files
  // @Post('upload')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     dest: './uploads',
  //   }),
  // )
  // uploadFile(@UploadedFile() file: Express.Multer.File) {
  //   console.log('filename = ', file);
  //   return 'name' + file.filename;
  // }

  // @Patch(':id')
  // @UseInterceptors(
  //   FileInterceptor('file', {
  //     dest: './uploads',
  //   }),
  // )
  // upload(
  //   @Param('id') id: string,
  //   // @UploadedFile() file: Express.Multer.File,
  //   @File('file') file: string
  // ): Observable<UpdateResult> {
  //   return this.studentService.updateSomeData(id, file);
  // }

  // @Patch('showtImage/:id')
  // showImage(@Param('id') id): Observable<DeleteResult> {
  //   return;
  // }
}
