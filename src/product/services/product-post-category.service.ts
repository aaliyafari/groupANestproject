import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { from, Observable } from "rxjs";
import { Repository } from "typeorm";
import { categories } from "../models/product-post-category.entity";
import { categories_interface } from "../models/product-post-category.interface";
// import { ProductPostCategoryInterface } from "../models/product-category.interface";
// import { ProductAndCategoryData } from "../models/product-post-category.entity";


@Injectable()

export class categories_service {
    constructor(@InjectRepository(categories) private readonly categories: Repository<categories>) { }
    createCategories(productCategories: categories_interface): Observable<categories_interface> {
        return from(this.categories.save(productCategories))
    }


    findAllData(): Observable<categories[]> {
        return from(this.categories.find())

    }




}