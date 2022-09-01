import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, OneToMany, ManyToMany, JoinTable} from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default:'',
})
  profile: string;

  @Column({nullable: false,
   default:'',
})
  description: string;

  //Many-to-many relation with user
  @ManyToMany((type) => User, (user) => user.roles,{
  })
  users: User[];
 
} 