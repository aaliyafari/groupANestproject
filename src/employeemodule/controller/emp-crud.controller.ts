/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Patch,
  Delete,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { EmpCrudService } from '../services/emp-crud.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { EmpCrud } from 'src/models/postinterface';
import { Observable } from 'rxjs/internal/Observable';
import { EmpCrudModule } from '../emp-crud.module';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('demo')
export class EmpCrudController {
  imagepath: string;
  constructor(private empService: EmpCrudService) {}
  @Post()
  create(@Body() post: EmpCrud): Observable<EmpCrud> {
    return this.empService.createPost(post);
  }

  @Get()
  getAllEmployeeData(): Observable<EmpCrud[]> {
    return this.empService.getEmployeeData();
  }
  @Get(':id')
  getEmployeeID(@Param('id') id: number) {
    return this.empService.findEmployeeById(id);
  }

  @Put(':id')
  updateAllEmployee(
    @Param('id') id: number,
    @Body() post: EmpCrud,
  ): Observable<UpdateResult> {
    return this.empService.updateEmployeeRecord(id, post);
  }

  // @Patch(':id')
  // updatePatch(id: number, @Body() post: EmpCrud): Observable<UpdateResult> {
  //   return this.empService.updatePatchPost(id, post);
  // }
  @Patch(':id')
  updateSomeData(
    @Param('id')
    id: number,
    @Body() post: EmpCrud,
  ): Observable<UpdateResult> {
    return this.empService.updateSomeData(id, post);
  }
  @Delete(':id')
  deleteEmployeeData(@Param('id') id: number): Observable<DeleteResult> {
    return this.empService.deleteEmployeeRecord(id);
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
          // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
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
  @Get('/image/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
  }
}
