import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductPost } from '../models/product.entity';
// import { ProductPost } from '../models/product.entity';
//import {} from '../models/product.interface'
import { ProductService } from '../services/product.service';

@Controller('feed')
export class ProductController {
  constructor(private ProductService: ProductService) {}
  @Post()
  create(@Body() productPost: ProductPost): Observable<ProductPost> {
    return this.ProductService.createPost(productPost);
  }
  @Get('/allData')
  findPost(): Observable<ProductPost[]> {
    return this.ProductService.findAllPost();
  }
  @Put(':id')
  updatePost(
    @Param('id') id: number,
    @Body() productPost: ProductPost,
  ): Observable<UpdateResult> {
    return this.ProductService.updateData(id, productPost);
  }
  @Patch(':id')
    updateSomeData(@Param('id')id:number,@Body()feedPost:ProductPost):Observable<UpdateResult>{
        return this.ProductService.updateSomeData(id,feedPost)
    }
    @Delete(':id')
    deletePost(@Param('id')id:number):Observable<DeleteResult>{
        return this.ProductService.DeleteData(id)
    }
}
