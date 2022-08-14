import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductPostEntity } from '../models/product.entity';
import { ProductPost } from '../models/product.interface';
// import { ProductPostEntity } from '../model/post.entity';
// import { ProductPost } from '../model/post.interface';
//import {v4 as uuidv4} from 'uuid';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductPostEntity)
        private readonly ProductPostRepository:Repository<ProductPostEntity>
    ){}

    createPost(feedPost:ProductPost):Observable<ProductPost>{
        return from( this.ProductPostRepository.save(feedPost))
    }
    findAllPost():Observable<ProductPost[]>{
        return from(this.ProductPostRepository.find())
    }
    findById(id:number):Observable<ProductPost>{
        return from(this.ProductPostRepository.findOneBy({id}))
    }
    updateData(id:number,feedPost:ProductPost):Observable<UpdateResult>{
        return from(this.ProductPostRepository.update(id,feedPost))
    }
    updateSomeData(id:number,feedPost:ProductPost):Observable<UpdateResult>{
        return from(this.ProductPostRepository.update(id,feedPost))
    }
    DeleteData(id:number):Observable<DeleteResult>{
        return from(this.ProductPostRepository.delete(id))
    }
}
