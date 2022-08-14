import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductPost } from '../models/product.entity';
//import { Produ } from '../models/product.entity'
import {ProductPostEntity } from '../models/product.interface'

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductPostEntity)
        private readonly productPostEntity:Repository<ProductPostEntity>
    ){}

    createPost(productPost:ProductPost):Observable<ProductPost>{
        return from( this.productPostEntity.save(productPost))
    }
    findAllPost():Observable<ProductPost[]>{
        return from(this.productPostEntity.find())
    }
    updateData(id:number,productPost:ProductPost):Observable<UpdateResult>{
        return from(this.productPostEntity.update(id,productPost))
    }
    updateSomeData(id:number,productPost:ProductPost):Observable<UpdateResult>{
        return from(this.productPostEntity.update(id,productPost))
    }
    DeleteData(id:number):Observable<DeleteResult>{
        return from(this.productPostEntity.delete(id))
    }
}
