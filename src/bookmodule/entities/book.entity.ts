//import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('book_details')
export class BookEntity {
    @PrimaryGeneratedColumn()
    book_id: number;
    
    @Column({default: ''})
    //@IsNotEmpty()
    book_name: string;

    @Column()
    //@IsNotEmpty()
    author: string;

    @Column()
    //@IsNotEmpty()
    price: number;

    @Column()
    //@IsNotEmpty()
    book_image: string;

    @Column()
    //@IsNotEmpty()
    book_isbn: string;
}