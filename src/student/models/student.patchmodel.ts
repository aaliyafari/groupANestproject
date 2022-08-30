import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

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

}
