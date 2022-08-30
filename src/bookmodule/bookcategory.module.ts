import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookcategoryController } from './bookcategory.controller';
import { BookCategoryService } from './bookcategory.service';
import { BookEntity } from './entities/book.entity';
import { BookCategoryEntity } from './entities/bookcategory.entity';

@Module({
  controllers: [BookcategoryController],
  providers: [BookCategoryService],
  imports:[
    TypeOrmModule.forFeature([BookEntity,BookCategoryEntity])
  ],
})
export class BookCategoryModule {}










// import { Module } from '@nestjs/common';
// import { BookCategoryService } from './bookcategory.service';
// import { BookcategoryController } from './bookcategory.controller';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { BookCategoryEntity } from './entities/bookcategory.entity';

// @Module({
//   controllers: [BookcategoryController],
//   providers: [BookCategoryService],
//   imports:[
//     TypeOrmModule.forFeature([BookCategoryEntity])
//   ],
// })
// export class BookCategoryModule {}