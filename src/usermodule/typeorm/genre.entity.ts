import { User } from "./user.entity";
import { PostEntity } from "./post.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class GenreEntity{
    @PrimaryGeneratedColumn({
        type:'bigint',
        name:'id'
    })
    id:number;

    @Column({
        default:''
    })
    name:string;
    
    @ManyToMany(()=>PostEntity,(post:PostEntity)=>post.genreCategory)
    post:PostEntity[];
}