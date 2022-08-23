/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student.controller';
import { StudentService } from './services/student.service';
import { StudentDataEntity } from './models/student.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([StudentDataEntity])],
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
