import { Body, Controller, Get, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { ProductPostCategoryInterface } from "../models/product-category.interface";
import { ProductAndCategoryData } from "../models/product-post-category.entity";
import { ProductPostCategoryService } from "../services/product-post-category.service";


@Controller('postCategory')
export class ProductPostCategoryController{
    constructor(private ProductPostCategory:ProductPostCategoryService) {}
    @Post('/create')
    create(
      @Body() productPost:ProductAndCategoryData,
    ): Observable<ProductPostCategoryInterface> {
      return this.ProductPostCategory.createPostCategories(productPost)
    }
    @Get('/allData')
    findProductCategory():Observable<ProductPostCategoryInterface[]>{
      return this.ProductPostCategory.findAllData()
    } 
}