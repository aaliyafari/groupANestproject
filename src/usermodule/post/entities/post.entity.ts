import { User } from 'src/usermodule/typeorm/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    default: '',
  })
  profile: string;

  @Column({ nullable: false, default: '' })
  description: string;

  //Many-to-many relation with user
  @ManyToMany((type) => User, (post) => post.posts, {})
  posttab: User[];
}
