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
  ParseUUIDPipe,
} from '@nestjs/common';
import { EmpCrudService } from '../services/emp-crud.service';
import { DeleteResult, UpdateResult } from 'typeorm';
import { EmpCrud } from 'src/models/postinterface';
import { Observable } from 'rxjs/internal/Observable';
import { EmpCrudModule } from '../emp-crud.module';
@Controller('demo')
export class EmpCrudController {
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
  s;
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
    @Param(
      'id',
      new ParseUUIDPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
    @Body() post: EmpCrud,
  ): Observable<UpdateResult> {
    return this.empService.updateSomeData(id, post);
  }
  @Delete(':id')
  deleteEmployeeData(@Param('id') id: number): Observable<DeleteResult> {
    return this.empService.deleteEmployeeRecord(id);
  }
}
