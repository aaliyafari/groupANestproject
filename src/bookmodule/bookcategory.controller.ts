import { Body, Controller, Get, Post } from '@nestjs/common';
import { BookCategoryService } from './bookcategory.service';
//import { CreateBookCateDto } from './dto/create-book.dto';
import { CreateBookCategoryDto } from './dto/create-bookcategory.dto';

@Controller('bookcontroller')
export class BookcategoryController{
  constructor(private bookCategoryService: BookCategoryService){}
  // bookcategoryService: any;
  bookService: any;

  @Post()
  create(@Body() createBookCategoryDto: CreateBookCategoryDto) {
    return this.bookCategoryService.createCat(createBookCategoryDto);
  }
  
  //Get all
  @Get()
  findAll() {
    return this.bookCategoryService.findAllBooks();
  }
}
