import { Column, Entity, OneToOne,ManyToOne,ManyToMany,PrimaryGeneratedColumn, JoinTable } from 'typeorm';
import { User } from './user.entity';
import { Address } from './address.entity';
import { GenreEntity } from './genre.entity';
@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;
  
  @Column({
    name:'Post_title',
    default:'',
  })
  Post_title:string;

  @Column({
    name:'Post_Content',
    default:'',
  })
  Post_Content:string;

  @Column({
    nullable:true
  })
  category?:string;



  @ManyToOne(type => User, user => user.post)
  user: User;

  @ManyToMany(type => GenreEntity)
    @JoinTable()
    genreCategory: GenreEntity[];
}