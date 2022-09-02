import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSizeController } from './controllers/product-category.controller';
import { categoriesController} from './controllers/product-post-category.controller';
import { ProductController } from './controllers/product.controller';
import { product_Categories } from './models/product-category.entity';
import { categories} from './models/product-post-category.entity';
import { ProductPostEntity } from './models/product.entity';
import { oneToMany_service } from './services/product-category.service';
import { categories_service} from './services/product-post-category.service';
// import { ProductPostEntity } from './models/product.interface';
import { ProductService } from './services/product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductPostEntity, product_Categories, categories])
  ],
  controllers: [ProductController, ProductSizeController, categoriesController],
  providers: [ProductService, oneToMany_service, categories_service]
})
export class ProductModule { }
