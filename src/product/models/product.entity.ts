// export interface ProductPost{
//     id?:number;
//     productName?:string;
//     price?:string;
//     stock?:string;
//     size?:string;
//     image?:string;
//     createdAt?:Date;
// }
import { IsNumberString } from 'class-validator';
import { type } from 'os';
import { timestamp } from 'rxjs';
import { ProductPostCategory } from 'src/product/models/product-category.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export enum ProductData {
  AVAILABLE = 'Available',
  OUTOFSTOCK = 'OutOfStock',
}
@Entity('product_post')
export class ProductPostEntity {
  @PrimaryGeneratedColumn()
  // @IsNumberString()
  id: number;

  @Column({ default: '' })
  productName: string;

  @Column({ type: 'bigint', default: null })
  price: number;

  @Column({ type: 'enum', enum: ProductData, default: null })
  stock: ProductData;

  // @Column({ type:'enum',enum:ProductSize,default:null})
  // size: ProductSize;

  // @Column({type:'date'})
  // manufacturingDate?:string;

  productCategory: any;
  // @Column({type:'date'})
  // expiryDate?:string;

  // @Column({ default: '' })
  // image: string;

  @ManyToMany(
    () => ProductPostCategory,
    (productCategory: ProductPostCategory) => productCategory.productEntity,
  )
  @JoinTable({name:'productpostcategory'})
  productCategory: ProductPostCategory[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
