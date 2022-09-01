import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookCategoryEntity } from "./bookcategory.entity";
@Entity('book_detail_new')
export class BookEntity {
    @PrimaryGeneratedColumn()
    book_id: number;
    @Column({default: ''})
    book_name: string;
    @Column()
    book_author: string;
    @Column()
    book_price: number;
    @Column()
    book_image: string;
    @Column()
    book_isbn: string;

    @ManyToMany(() => BookCategoryEntity)
    // @JoinTable()
    categories: BookCategoryEntity[]
}
