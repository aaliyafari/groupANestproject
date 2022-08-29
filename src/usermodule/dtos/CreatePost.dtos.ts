import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
import internal from "stream";

export class CreatePostDto {
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
}