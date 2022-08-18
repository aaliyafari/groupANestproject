import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
  @Get()
  findAll() {
    return this.bookService.findAllBooks();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.bookService.getOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() createBookDto: UpdateBookDto) {
    return this.bookService.updatePutBook(id, createBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.deleteBook(+id);
  }
}













// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { BookService } from './book.service';
// //import { CreateBookDto } from './dto/create-book.dto';
// //import { UpdateBookDto } from './dto/update-book.dto';
// import { Book } from './entities/book.interface';

// @Controller('book')
// export class BookController {
//   constructor(private readonly bookService: BookService) {}

//   @Post()
//   // create(@Body() createBookDto: CreateBookDto) {
//   create(@Body() book: Book) {

//     return this.bookService.create(book);
//   }
//   @Get()
//   findAll() {
//     return this.bookService.findAllBooks();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: number) {
//     return this.bookService.getOne(id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: number, @Body() book: Book) {
//     return this.bookService.updatePutBook(id, book);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.bookService.deleteBook(+id);
//   }
// }