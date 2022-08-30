import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { BookEntity } from './entities/book.entity';
import { BookCategoryEntity } from './entities/bookcategory.entity';

@Module({
  controllers: [BookController],
  providers: [BookService],
  imports:[
    TypeOrmModule.forFeature([BookEntity,BookCategoryEntity])
  ],
})
export class BookModule {}





// import { Module } from '@nestjs/common';
// import { BookService } from './book.service';
// import { BookController } from './book.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// //import { BookEntity } from './entities/book.entity';
// import { BookCategoryEntity } from './entities/bookcategory.entity';
// //import { BookCategoryEntity } from './entities/book_category.entity';

// @Module({
//   controllers: [BookController],
//   providers: [BookService],
//   imports:[
//     TypeOrmModule.forFeature([BookCategoryEntity])
//   ],
// })
// export class BookModule {}