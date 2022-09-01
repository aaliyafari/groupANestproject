import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateRoleDto {

  @IsOptional()
  @IsNotEmpty()
  profile:string;
  
  @IsOptional()
  @IsNotEmpty()
  description: string;
 
}