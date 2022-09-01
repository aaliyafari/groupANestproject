import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('productpostcategory')

export class ProductAndCategoryData {
  @PrimaryGeneratedColumn()
  id:number;

  @Column()
  productPostId: number;

  @Column()
  productCategory1Id: number;
}
