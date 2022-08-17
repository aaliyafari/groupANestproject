import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/CreateUser.dtos';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private readonly userRepository: Repository<User>,
      ) {}
          
      createUser(createUserDto: CreateUserDto) {
        const newUser = this.userRepository.create(createUserDto);
        return this.userRepository.save(newUser);
      }
      getUsers() {
        return this.userRepository.find();
      }

      findUsersById(id: number) {
        return this.userRepository.findOneBy({id})
      }
      delete(id: number){
        this.userRepository.delete(id);
      }

      // update(usertoUpdate){
      //   this.userRepository.update(usertoUpdate.id,usertoUpdate);
      //  }
      //  updateUser(id, userRepository) {
      //   return this.userRepository[id]=userRepository;
      //  }

       async updateUser(id: number, post: CreateUserDto) {
        await this.userRepository.update(id, post);
        const updatedUser = await this.userRepository.findOneBy({id});
        if (updatedUser) {
          return updatedUser;
        }
    }
  }