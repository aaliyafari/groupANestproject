import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { ProductPostEntity } from 'src/product/models/product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
//import { ProductCategoryController } from '../controllers/product-category.controller';
import { product_Categories } from '../models/product-category.entity';
import { productOneToMany } from '../models/product-category.interface';
// import { ProductPostCategory } from '../models/product-category.entity';
// import { ProductPostCategoryInterface } from '../models/product-category.interface';

@Injectable()
export class oneToMany_service {
    constructor(
        @InjectRepository(product_Categories)
        private readonly oneToManyRepository: Repository<product_Categories>

    ) { }
    createproductsize(productsize: productOneToMany): Observable<productOneToMany> {
        return from(this.oneToManyRepository.save(productsize))
    }


    findAllData(): Observable<product_Categories[]> {
        return from(this.oneToManyRepository.find())

    }

}