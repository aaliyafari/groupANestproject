import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductAndCategoryData } from '../models/product-post-category.entity';
import { ProductData, ProductPostEntity } from '../models/product.entity';
import { ProductPost } from '../models/product.interface';
// import { ProductPostEntity } from '../model/post.entity';
// import { ProductPost } from '../model/post.interface';
//import {v4 as uuidv4} from 'uuid';
import { CreateUserModel } from '../models/productModel';
@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductPostEntity)
    private readonly ProductPostRepository: Repository<ProductPostEntity>,
  ) {}


  // CREATE DATA:
  createPost(feedPost: ProductPost): Observable<ProductPost> {
    return from(this.ProductPostRepository.save(feedPost));
  }
  // FIND ALL DATA:
  findAllPost(): Observable<ProductPost[]> {
    return from(this.ProductPostRepository.find());
  }
  // FIND DATA BY ID:
  findById(id: number): Observable<ProductPost> {
    return from(this.ProductPostRepository.findOneBy({ id }));
  }
  // FIND DATA THROUGH EACH FIELD:
  findByQuery(id: number): Observable<ProductPost> {
    return from(this.ProductPostRepository.findOneBy({ id }));
  }
  // FIND DATA THROUGH PRICE FIELD:
  findPriceByQuery(price: number): Observable<ProductPost> {
    return from(this.ProductPostRepository.findOneBy({ price }));
  }
  // FIND DATA THROUGH STOCK FIELD:
  findStockByQuery(stock: ProductData): Observable<ProductPost> {
    return from(this.ProductPostRepository.findOneBy({ stock }));
  }
  // FIND DATA THROUGH SIZE FIELD:
  // findSizeByQuery(size:ProductSize):Observable<ProductPost>{
  //   return from(this.ProductPostRepository.findOneBy({size}))
  // }
  // UPDATE THE WHOLE DATA:
  updateData(id: number, feedPost: ProductPost): Observable<UpdateResult> {
    return from(this.ProductPostRepository.update(id, feedPost));
  }
  // UPDATE SOME FEILDS OF THE DATA:
  updateSomeData(id: number, feedPost: ProductPost): Observable<UpdateResult> {
    return from(this.ProductPostRepository.update(id, feedPost));
  }
  // DELETE THE DATA THROUGH ID:
  DeleteData(id: number): Observable<DeleteResult> {
    return from(this.ProductPostRepository.delete(id));
  }
}
