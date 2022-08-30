import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductPostCategoryController } from "./controllers/product-post-category.controller";
import { ProductAndCategoryData } from "./models/product-post-category.entity";
import { ProductCategoryService } from "./services/product-category.service";
import { ProductPostCategoryService } from "./services/product-post-category.service";

@Module({
    imports:[TypeOrmModule.forFeature([ProductAndCategoryData])],
    controllers:[ProductPostCategoryController],
    providers:[ProductPostCategoryService]
})
export class ProductDataModule{}