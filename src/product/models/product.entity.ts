import { IsNotEmpty } from "class-validator";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { product_Categories } from "./product-category.entity";

export enum ProductData {
  AVAILABLE = "Available",
  OUTOFSTOCK = "OutOfStock"
}
// export enum ProductSize {
//   SMALL = "S",
//   MEDIUM = "M",
//   LARGE = "L",
//   EXTRALARGE = "XL"
// }
@Entity({name:'product'})


export class ProductPostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  @IsNotEmpty()
  productName: string;

  @Column({ type: "int" })
  price: number;

  @Column({ type: 'enum', enum: ProductData, default: null })
  stock: ProductData;

  // @Column({ type: 'enum', enum: ProductSize, default: null })
  // size: ProductSize;

  @Column({ default: '' })
  image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;


  @ManyToMany(() => product_Categories)
  @JoinTable({
    name: 'join_product',
  })
  //public product:
  public categories: product_Categories[]

  // @OneToMany( typeFunctionOrTarget:()=>OneToMany,)
  //@OneToMany(()=>product_Categories,(post:product_Categories)=>post.user)
  // @OneToMany(() => product_Categories, (pro: product_Categories) => pro.post)
  // public products: product_Categories[]


}
