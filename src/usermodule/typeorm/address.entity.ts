import { userInfo } from 'os';
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Address {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'user_id',
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
  Country: string;

  @OneToOne(()=>User,(User: User)=>
  User.address)
user:User
}