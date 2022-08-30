import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreEntity, User } from '../typeorm';
import {Address} from '../typeorm'
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dtos';
import { PostEntity } from '../typeorm';
import { CreatePostDto } from '../dtos/CreatePost.dtos';
import { CreateGenreDto } from '../dtos/CreateGenre.dtos';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
        @InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>,
        @InjectRepository(GenreEntity) private readonly genreRepository: Repository<GenreEntity>
        ) {}
      async createUser(createUserDto: CreateUserDto,createGenreDto: CreateGenreDto, createPostDto: CreatePostDto): Promise<User> {
        const newUser = this.userRepository.create({
          name:createUserDto.name,
          username:createUserDto.username,
          user_email:createUserDto.user_email,
          password:createUserDto.password,
          gender:createUserDto.gender,
          
        });

        const newPost = this.postRepository.create({
          post_title:createPostDto.post_title,
          post_content:createPostDto.post_content
        });

        const newCategory = this.genreRepository.create({
          name:createGenreDto.name
        });
        return this.userRepository.save(newUser);
      }
      // uploadFiles(createUserDto: CreateUserDto){
      //   const newFile=this.userRepository.create(createUserDto)
      //   return this.userRepository.save(newFile);
      // }
      getUsers() {
        return this.userRepository.find();
      }

      findUsersById(id: number) {
        return this.userRepository.findOneBy({id})
      }
      delete(id: number){
        this.userRepository.delete(id);
      }


       async updateUser(id: number, post: CreateUserDto) {
        await this.userRepository.update(id, post);
        const updatedUser = await this.userRepository.findOneBy({id});
        if (updatedUser) {
          return updatedUser;
        }
    }

    async updateAllUser(id: number, post: CreateUserDto) {
      await this.userRepository.update(id, post);
      const updatedAllUser = await this.userRepository.findOneBy({id});
      if (updatedAllUser) {
        return updatedAllUser;
      }
      
  }
  }