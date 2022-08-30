import { IsNotEmpty, IsString } from "class-validator";
export class CreateBookCategoryDto {
    @IsNotEmpty()
    bookcategory_id: number;

    @IsNotEmpty()
    @IsString()
    bookcategory_name: string;

    // @IsNotEmpty()
    // @IsString()
    // bookcategory_author: string;
}







// export class CreateBookCategoryDto {
//   book_id:number;
//   book_author:string;
//   book_category:string;
// }