import { IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreatePostDto {
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  post_title:string;
  
  @IsOptional()
  @IsNotEmpty()
  @MinLength(3)
  post_content: string;

  // @IsOptional()
  // @IsNotEmpty()
  // @IsEmail()
  // user_email: string;
}