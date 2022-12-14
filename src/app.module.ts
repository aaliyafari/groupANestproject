/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmpCrudModule } from './employeemodule/emp-crud.module';
import { StudentModule } from './student/student.module';
import { BookModule } from './bookmodule/book.module';
import { CourseModule } from './student/course.module';
import { StudentCourseModule } from './student/student_course.module';

import { DepartmentModule } from './employeemodule/services/department.module';

import { BookCategoryModule } from './bookmodule/bookcategory.module';
import { UsersModule } from './usermodule/users.module';
import { ProductCategoryModule } from './product/product-category.module';
import { ProductDataModule } from './product/product-post-category.module';
import { ProductModule } from './product/product.module';

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
        synchronize: false,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    ProductCategoryModule,
    ProductDataModule,
    ProductModule,
    EmpCrudModule,
    StudentModule,
    BookModule,
    EmpCrudModule,
    StudentModule,
    BookModule,
    BookCategoryModule,
    CourseModule,
    StudentCourseModule,
    DepartmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
