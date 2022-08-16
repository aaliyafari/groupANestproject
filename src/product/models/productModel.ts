import { IsInt, IsNotEmpty, IsString, } from "class-validator";


export class CreateUserModel{
    @IsNotEmpty()
    @IsString()
    productName:string;

    @IsNotEmpty()
    @IsInt()
    price:number;
}

