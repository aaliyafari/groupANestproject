import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
//import { Bookcategory } from './entities/bookcategory.entity';
import { BookCategoryEntity } from './entities/bookcategory.entity';
import { Bookcategory } from './entities/bookcategory.interface';


@Injectable()
export class BookCategoryService{
  constructor(
    @InjectRepository(BookCategoryEntity)
    private readonly bookcategoryRepository: Repository<BookCategoryEntity>
  ){}

  createCat(bookcategory: Bookcategory): Observable<Bookcategory> {
    return from(this.bookcategoryRepository.save(bookcategory));
}

  findAllBooks(): Observable<Bookcategory[]> {
    return from(this.bookcategoryRepository.find());
}
}


// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { from, Observable } from 'rxjs';
// import { Repository } from 'typeorm';
// import { BookCategoryEntity } from './entities/bookcategory.entity';
// import { Bookcategory } from './entities/bookcategory.interface';


// @Injectable()
// export class BookCategoryService{
//   constructor(
//     @InjectRepository(BookCategoryEntity)
//     private readonly bookcategoryRepository: Repository<BookCategoryEntity>
//   ){}

//   findAllBooks(): Observable<Bookcategory[]> {
//     return from(this.bookcategoryRepository.find());
// }
// }

