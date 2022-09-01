/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentPostEntity } from 'src/models/department.entity';
import { DepartmentController } from '../controller/department.controller';
import { DepartmentService } from './department.services';

@Module({
  imports:[TypeOrmModule.forFeature([DepartmentPostEntity])],//,usermodule
  providers: [DepartmentService],
  controllers: [DepartmentController],
//   exports:[TypeOrmModule.forFeature([DepartmentPostEntity])]
})
export class DepartmentModule {}