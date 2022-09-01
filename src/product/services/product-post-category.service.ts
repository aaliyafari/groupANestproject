import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { ProductPostCategoryInterface } from "../models/product-category.interface";
import { ProductAndCategoryData } from "../models/product-post-category.entity";


@Injectable()
export class ProductPostCategoryService {
  constructor(
    @InjectRepository(ProductAndCategoryData)
    private readonly ProductAndCategoryRepository: Repository<ProductAndCategoryData>,
  ) {}

  createPostCategories(productPostCategories:ProductAndCategoryData): Observable<ProductPostCategoryInterface> {
    return from(this.ProductAndCategoryRepository.save(productPostCategories))
}
findAllData(): Observable<ProductAndCategoryData[]> {
    return from(this.ProductAndCategoryRepository.find())
}
}