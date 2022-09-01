import { Test, TestingModule } from '@nestjs/testing';
import { BookCategoryService } from './bookcategory.service';

describe('BookService', () => {
  let service: BookCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookCategoryService],
    }).compile();

    service = module.get<BookCategoryService>(BookCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});