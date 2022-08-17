/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity('emp_crud')
export class EmpCrudEntity {

  @PrimaryGeneratedColumn()
  id: number;
  
  @Column({ default: '' })  
  body: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
