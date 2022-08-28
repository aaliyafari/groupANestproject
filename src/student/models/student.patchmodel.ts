import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
// import { Cousre } from './student.entity';

export class StudentPatchData {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  lastname: string;

  @IsNotEmpty()
  @IsNumber()
  @IsOptional()
  mobile: number;

  @IsNotEmpty()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  address: string;

  // @IsNotEmpty()
  // @IsEnum(Cousre)
  // @IsOptional()
  // course_name: Cousre;

  //   @IsString()
  //   @IsOptional()
  //   image: string;
}
