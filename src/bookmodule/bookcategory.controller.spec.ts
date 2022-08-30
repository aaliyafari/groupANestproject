import { Test, TestingModule } from '@nestjs/testing';
import { BookcategoryController } from './bookcategory.controller';
import { BookService } from './book.service';

describe('BookController', () => {
  let controller: BookcategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookcategoryController],
      providers: [BookService],
    }).compile();

    controller = module.get<BookcategoryController>(BookcategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});