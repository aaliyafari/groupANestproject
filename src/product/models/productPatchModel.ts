import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ProductData, ProductSize } from './product.entity';

export class PatchProductModel {
  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(15)
  @IsOptional()
  productName?: string;

  @IsNotEmpty()
  @IsInt()
  @IsOptional()
  price?: number;

  @IsNotEmpty()
  @IsEnum(ProductData)
  @IsOptional()
  stock?: ProductData;

  @IsNotEmpty()
  @IsEnum(ProductSize)
  @IsOptional()
  size?: ProductSize;

  // @IsNotEmpty()
  // @IsString()
  // @IsOptional()
  // manufacturingDate?:string;

  // @IsNotEmpty()
  // @IsString()
  // @IsOptional()
  // expiryDate?:string;

//   @IsString()
//   @IsOptional()
//   image?: string;
}
