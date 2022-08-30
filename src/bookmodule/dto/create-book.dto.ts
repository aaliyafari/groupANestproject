import { IsInt, IsNotEmpty, IsString } from "class-validator";
export class CreateBookDto {
    @IsNotEmpty()
    book_id: number;

    @IsNotEmpty()
    @IsString()
    book_name: string;

    @IsNotEmpty()
    @IsString()
    book_author: string;

    @IsNotEmpty()
    @IsInt()
    book_price: number;

    @IsNotEmpty()
    @IsString()
    book_image: string;
    
    @IsNotEmpty()
    @IsString()
    book_isbn: string;
}












// import { IsNotEmpty, IsInt, IsString } from "class-validator";

// export class CreateBookDto {
//     @IsNotEmpty()
//     book_id: number;

//     @IsNotEmpty()
//     @IsString()
//     book_name: string;

//     @IsNotEmpty()
//     @IsString()
//     author: string;

//     @IsNotEmpty()
//     @IsInt()
//     price: number;

//    @IsNotEmpty()
//     @IsString()
//     book_image: string;

//    @IsNotEmpty()
//     @IsString()
//     book_isbn: string;
// }