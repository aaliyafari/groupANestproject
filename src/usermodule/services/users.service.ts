import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dtos';
import { Role } from '../typeorm/role.entity';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}
          
      createUser(createUserDto: CreateUserDto,) {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
      }
      uploadFiles(createUserDto: CreateUserDto){
        const newFile=this.userRepository.create(createUserDto)
        return this.userRepository.save(newFile);
      }
      getUsers() {
        return this.userRepository.find();
      }

      findUsersById(user_id: number) {
        return this.userRepository.findOneBy({user_id})
      }
      delete(id: number){
        this.userRepository.delete(id);
      }


       async updateUser(user_id: number, post: CreateUserDto) {
        await this.userRepository.update(user_id, post);
        const updatedUser = await this.userRepository.findOneBy({user_id});
        if (updatedUser) {
          return updatedUser;
        }
    }

    async updateAllUser(user_id: number, post: CreateUserDto) {
      await this.userRepository.update(user_id, post);
      const updatedAllUser = await this.userRepository.findOneBy({user_id});
      if (updatedAllUser) {
        return updatedAllUser;
      }
      
  }
  }