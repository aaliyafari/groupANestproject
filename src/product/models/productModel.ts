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
  @IsNotEmpty()
  @IsString()
  productName: string;

  @IsNotEmpty()
  @IsInt()
  price: number;

  @IsNotEmpty()
  @IsEnum(ProductData)
  stock: ProductData;

  // @IsNotEmpty()
  // //@IsEnum(ProductSize)
  // size: ProductSize;

  //@IsNotEmpty()
  image: string;
}

