/* eslint-disable prettier/prettier */
import { ProductPostEntity } from 'src/product/models/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({name:'size'})
export class product_Categories {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    size: string
    //user: any
    @ManyToMany(() => ProductPostEntity)
    @JoinTable()
    product: ProductPostEntity[]

    // @ManyToOne(() => many, (photo) => many.user)
    // photos: Photo[]
    // @ManyToOne(() => ProductPostEntity, (post: ProductPostEntity) => post.products)
    // post: ProductPostEntity
}