import { Module } from '@nestjs/common';
import { UsersModule } from './usermodule/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';
import { EmpCrudModule } from './employeemodule/emp-crud.module';
import entities from 'typeorm';
import { StudentModule } from './student/student.module';
import { BookModule } from './bookmodule/book.module';
import { CourseModule } from './student/course.module';
import { StudentCourseModule } from './student/student_course.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    ProductModule,
    EmpCrudModule,
    StudentModule,
    BookModule,
    CourseModule,
    StudentCourseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
