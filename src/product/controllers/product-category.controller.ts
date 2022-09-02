import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
//import { ProductPostCategory } from '../models/product-category.entity';
import { productOneToMany} from '../models/product-category.interface';
import { product_model } from '../models/product-category.model';
import { oneToMany_service } from '../services/product-category.service';
//import { ProductCategoryModel } from '../models/product-category.model';
// import { ProductCategoryData } from '../models/product-category.model';
//import { ProductCategoryData } from '../models/product-category.model';
// import { ProductPostEntity } from '../models/product.entity';
//import { ProductCategoryService } from '../services/product-category.service';

@Controller("size")
export class ProductSizeController {
    constructor(private productSizeService: oneToMany_service) { }
    @Get()
    hello() {
        return "hiii amit"
    }
    @Post()

    createsize(@Body() productSize: product_model): Observable<productOneToMany> {
        return this.productSizeService.createproductsize(productSize)
    }

    @Get("/allData")
    allData(): Observable<productOneToMany[]> {

        return this.productSizeService.findAllData()
    }




}
