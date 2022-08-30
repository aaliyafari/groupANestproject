import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import {PostEntity} from './post.entity'
@Entity()
export class Address {
  @PrimaryGeneratedColumn({
    type:'bigint',
    name: 'id'
  })
  id: number;
  
  @Column({
    name:'Street',
    default:'',
  })
  street:string;

  @Column({
    name:"city",
    nullable: false,
    default: '',
  })
  city: string;

  @Column({
    name:"Country",
    nullable: false,
    default: '',
  })
  country: string;

  @OneToOne(()=>User,(user: User)=>
  user.address)
user:User
}