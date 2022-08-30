import { User } from "./user.entity";
import { PostEntity } from "./post.entity";
import { GenreEntity } from "./genre.entity";
import { Address } from "./address.entity";

const entities = [User];
const postentity=[PostEntity]
const genreentity=[GenreEntity]
const addressentity=[Address]


export {User};
export {PostEntity}
export {GenreEntity}
export {Address}
export default {
    entities,
    postentity,
    genreentity,
    addressentity
}
