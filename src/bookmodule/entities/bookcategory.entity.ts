import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { BookEntity } from './book.entity';

@Entity('bookCategory_new')
export class BookCategoryEntity {
  @PrimaryGeneratedColumn()
  bookcategory_id:number;
  @Column()
  bookcategory_name: string;
  // @Column()
  // bookcategory_author:string;


  @ManyToMany(() => BookEntity)
   @JoinTable(
  
   )
  categories: BookEntity[]
}

