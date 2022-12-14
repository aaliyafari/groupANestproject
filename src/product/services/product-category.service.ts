import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { ProductPostEntity } from 'src/product/models/product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductCategoryController } from '../controllers/product-category.controller';
import { ProductPostCategory } from '../models/product-category.entity';
import { ProductPostCategoryInterface } from '../models/product-category.interface';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductPostCategory)
    private readonly ProductCategoryRepository: Repository<ProductPostCategory>,
  ) {}
  // CREATE PRODUCT-CATEGORY DATA:
  createProductCategory(
    category:ProductPostCategoryInterface,
  ): Observable<ProductPostCategoryInterface> {
    return from(this.ProductCategoryRepository.save(category));
  }
  getProductCategory():Observable<ProductPostCategoryInterface[]>{
    return from(this.ProductCategoryRepository.find())
  }
  getProductCategoryById(id:number):Observable<ProductPostCategoryInterface>{
    return from(this.ProductCategoryRepository.findOneBy({id}))
  }
  updateProductCategory(id: number, feedPost:ProductPostCategoryInterface):Observable<UpdateResult>{
    return from(this.ProductCategoryRepository.update(id,feedPost))
  }
  deleteProductCategory(id:number):Observable<DeleteResult>{
    return from(this.ProductCategoryRepository.delete(id))
  }
}
