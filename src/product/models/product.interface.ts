import { type } from 'os';
import { timestamp } from 'rxjs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {v4 as uuidv4} from 'uuid';
@Entity('product_post')

export class ProductPostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ default: '' })
  productName: string;

  @Column({ default: '' })
  price: string;

  @Column({ default: '' })
  stock: string;

  @Column({ default: '' })
  size: string;

  @Column({ default: '' })
  image: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
