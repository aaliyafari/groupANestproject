import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Query,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { ProductData } from '../models/product.entity';
import { ProductPost } from '../models/product.interface';
// import { ProductPost } from '../models/product.entity';
//import {} from '../models/product.interface'
import { ProductService } from '../services/product.service';
import { CreateUserModel } from '../models/productModel';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { PatchProductModel } from '../models/productPatchModel';

@Controller('feed')
export class ProductController {
  imagepath: string;
  constructor(private ProductService: ProductService) {}
  @Post('/create')
  create(@Body() productPost: CreateUserModel): Observable<ProductPost> {
    return this.ProductService.createPost(productPost);
  }
  @Get('/allData')
  findPost(): Observable<ProductPost[]> {
    return this.ProductService.findAllPost();
  }
  @Get(':id')
  findPostId(
    @Param('id')
    id: number,
  ): Observable<ProductPost> {
    return this.ProductService.findById(id);
  }
  @Get('price/:price')
  findPostPriceQuery(@Param('price') price: number): Observable<ProductPost> {
    console.log(price);
    return this.ProductService.findPriceByQuery(price);
  }
  @Get('stock/:stock')
  findPostStockQuery(
    @Param('stock') stock: ProductData,
  ): Observable<ProductPost> {
    return this.ProductService.findStockByQuery(stock);
  }
  // @Get('size/:size')
  // findPostSizeQuery(@Param('size') size: ProductSize): Observable<ProductPost> {
  //   return this.ProductService.findSizeByQuery(size);
  // }

  @Get()
  findPostQuery(
    @Query('id')
    id: number,
  ): Observable<ProductPost> {
    return this.ProductService.findByQuery(id);
  }
  @Put(':id')
  updatePost(
    @Param('id')
    id: number,
    @Body() productPost: PatchProductModel,
  ): Observable<UpdateResult> {
    return this.ProductService.updateData(id, productPost);
  }
  @Patch('patch/:id')
  updateSomeData(
    @Param('id')
    id: number,
    @Body() feedPost: PatchProductModel,
  ): Observable<UpdateResult> {
    return this.ProductService.updateSomeData(id, feedPost);
  }
  @Delete(':id')
  deletePost(
    @Param('id')
    id: number,
  ): Observable<DeleteResult> {
    return this.ProductService.DeleteData(id);
  }
  // @Post('image')
  // @UseInterceptors(
  //   FileInterceptor('image', {
  //     storage: diskStorage({
  //       destination: './images',
  //       filename: (req, image, callback) => {
  //         const uniqueSuffix =
  //           Date.now() + '-' + Math.round(Math.random() * 1e9);
  //         const ext = extname(image.originalname);
  //         // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
  //         const filename = `${uniqueSuffix}${ext}`;
  //         callback(null, filename);
  //       },
  //     }),
  //   }),
  // )
  // handleupload(@UploadedFile() image: Express.Multer.File) {
  //   this.imagepath = image.path;
  //   console.log('image', image);
  //   console.log('path', image.path);
  //   return 'file upload API';
  // }
  // @Get('showimage/:image')
  // seeUploadedFile(@Param('image') image, @Res() res) {
  //   return res.sendFile(image, { root: './images' });
  // }
}
