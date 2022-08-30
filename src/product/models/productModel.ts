import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumberString,
  IsString,
  MaxLength,
  maxLength,
  MinLength,
} from 'class-validator';
import { Unique } from 'typeorm';
import { ProductData} from './product.entity';

export class CreateUserModel {
  id: number;
  // @IsNumberString()
  // id:number;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(15)
  productName: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  @IsNotEmpty()
  @IsEnum(ProductData)
  stock: ProductData;

  // @IsNotEmpty()
  // @IsEnum(ProductSize)
  // size: ProductSize;

  // @IsNotEmpty()
  // @IsString()
  // manufacturingDate?:string;

  // @IsNotEmpty()
  // @IsString()
  // expiryDate?:string;

  // @IsString()
//   image: string;
}
