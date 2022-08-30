import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProductAndCategoryData } from "../models/product-post-category.entity";


@Injectable()
export class ProductPostCategoryService {
  constructor(
    @InjectRepository(ProductAndCategoryData)
    private readonly ProductAndCategoryRepository: Repository<ProductAndCategoryData>,
  ) {}
}