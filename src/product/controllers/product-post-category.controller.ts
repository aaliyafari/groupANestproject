import { Body, Controller, Get, Post } from "@nestjs/common";
import { Observable } from "rxjs";
import { categories_interface } from "../models/product-post-category.interface";
import { categories_model } from "../models/product-post-category.model";
import { categories_service } from "../services/product-post-category.service";
// import { ProductPostCategoryInterface } from "../models/product-category.interface";
// import { ProductAndCategoryData } from "../models/product-post-category.entity";
// import { ProductPostCategoryService } from "../services/product-post-category.service";


@Controller("categories")
export class categoriesController {
    constructor(private categories: categories_service) { }
    @Get()
    hello() {
        return "hiii amit"
    }
    @Post()

    createCategories(@Body() product_Categories: categories_model): Observable<categories_interface> {
        //return this.categories.createCategories(product_Categories)
        return this.categories.createCategories(product_Categories)
    }

    @Get("/allData")
    allData(): Observable<categories_interface[]> {

        return this.categories.findAllData()
    }




}
