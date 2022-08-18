/* eslint-disable prettier/prettier */
import { IsEmail, IsInt, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class EmpCrud {
  @IsInt()
  id: number;
  
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsInt()
  mobile: number;

  @IsInt()
  salary: number;

  @IsEmail()
  email: string;

  @IsString()
  address: string;
}
