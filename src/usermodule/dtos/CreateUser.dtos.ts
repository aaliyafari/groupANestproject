import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import { Gender } from "../typeorm/user.entity";

export class CreateUserDto {

  @IsOptional()
  @IsNotEmpty()
  name:string;
  
  @IsOptional()
  @IsNotEmpty()
  username: string;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  user_email: string;

  @IsOptional()
  @IsNotEmpty()
  password: string;

  // @IsOptional()
  // @IsNotEmpty()
  // @MinLength(10)
  // @MaxLength(10)
  // mob_no: number;

  // @IsOptional()
  // @IsEnum(UserRole)
  // role: UserRole;

  @IsOptional()
  @IsEnum(Gender)
  gender:Gender;


  //  @IsOptional()
  //  @IsNotEmpty()
  // image:string
}