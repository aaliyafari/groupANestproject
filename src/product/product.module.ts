import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductPostCategoryController } from './controllers/product-post-category.controller';
import { ProductController } from './controllers/product.controller';
import { ProductAndCategoryData } from './models/product-post-category.entity';
import { ProductPostEntity } from './models/product.entity';
import { ProductPostCategoryService } from './services/product-post-category.service';
// import { ProductPostEntity } from './models/product.interface';
import { ProductService } from './services/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductPostEntity]),
  ],
  // import {  } from "module";
  controllers: [ProductController],
  providers: [ProductService],
  // exports:[
  //   TypeOrmModule.forFeature([ProductPostEntity])
  // ],
})
export class ProductModule {}
