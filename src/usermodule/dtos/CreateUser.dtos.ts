import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import internal from "stream";

export class CreateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  name:string;
  
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  user_email: string;

  @IsOptional()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  // @IsOptional()
  // @IsNotEmpty()
  // @MinLength(10)
  // @MaxLength(10)
  // mob_no: number;

  // @IsOptional()
  // UserRole: string;

  // @IsOptional()
  // gender:Int32Array;

  //  @IsOptional()
  //  @IsNotEmpty()
  // image:string
}