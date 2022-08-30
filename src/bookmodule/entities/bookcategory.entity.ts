import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bookCategory_new')
export class BookCategoryEntity {
  @PrimaryGeneratedColumn()
  bookcategory_id:number;
  @Column()
  bookcategory_name: string;
  // @Column()
  // bookcategory_author:string;
}