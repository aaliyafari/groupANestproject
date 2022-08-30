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
  Res,
} from '@nestjs/common';
import { StudentDataEntity } from '../models/student.entity';
import { StudentService } from '../services/student.service';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateStudentModel } from '../models/student-Model.dto';
import { StudentData } from '../models/student.interface';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileURLToPath } from 'url';
import { ApiTags } from '@nestjs/swagger';
import { extname } from 'path';
import { diskStorage } from 'multer';
import { StudentPatchData } from '../models/student.patchmodel';
@ApiTags('Student')
@Controller('student')
export class StudentController {
  imagepath: string;
  constructor(private studentService: StudentService) {}
  @Post()
  create(@Body() studentdata: CreateStudentModel): Observable<StudentData> {
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
    @Body() studentdata: StudentPatchData,
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
    @Body() studentdata: StudentPatchData,
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

  @Post('image')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './images',
        filename: (req, image, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(image.originalname);
          const filename = `${uniqueSuffix}${ext}`;
          callback(null, filename);
        },
      }),
    }),
  )
  handleupload(@UploadedFile() image: Express.Multer.File) {
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path', image.path);
    return 'file upload API';
  }
  @Get('showimage/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
}
