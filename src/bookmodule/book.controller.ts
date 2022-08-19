import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('book')
export class BookController {
  imagepath: any;
  constructor(private readonly bookService: BookService) {}

  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }
  @Post('image')
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({
      destination: './images',
      filename:(_req, image, callback) =>{
        const uniqueSuffix = Date.now() +'-'+ Math.round(Math.random()*1e9);
        const ext = extname(image.originalname);
        // const filename = `${image.originalname}-${uniqueSuffix}${ext}`;
        const filename = `${uniqueSuffix}${ext}`;
        callback(null,filename);
      }
    }),
  }),
  )
  handleupload(@UploadedFile() image:Express.Multer.File){
    this.imagepath = image.path;
    console.log('image', image);
    console.log('path',image.path);
    return "file upload API" + this.imagepath;
    // return this.bookService.handleupload(image);
  }
@Get('showimage/:image')
  seeUploadedFile(@Param('image') image, @Res() res) {
    return res.sendFile(image, { root: './images' });
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
