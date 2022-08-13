import { type } from 'os';
import { timestamp } from 'rxjs';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('product_post')
export class ProductPostEntity {
  @PrimaryGeneratedColumn()
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
