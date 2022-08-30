import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product-post-category2')

export class ProductAndCategoryData {
  @PrimaryGeneratedColumn()
  id:number;

//   @Column({ default: 0 })
//   productPostId: number;

//   @Column({ default: 0 })
//   productCategory1Id: number;
}
