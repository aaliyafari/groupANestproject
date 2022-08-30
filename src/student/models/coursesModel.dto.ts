import { IsNotEmpty, IsString } from 'class-validator';

export class CousreModel {
  @IsNotEmpty()
  @IsString()
  course_name: string;
}
