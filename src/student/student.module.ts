import { Module } from '@nestjs/common';
import { StudentController } from './controllers/student.controller';

@Module({
  controllers: [StudentController]
})
export class StudentModule {}
