import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity, User } from '../typeorm';
import {Address} from '../typeorm'
import { Repository } from 'typeorm';
import { CreatePostDto } from '../dtos/CreatePost.dtos';
import { Role } from '../typeorm/role.entity';
import { CreateRoleDto } from '../dtos/CreateRole.dtos';


@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role) private readonly roleRepository: Repository<Role>,
      ) {}
      async createRole(createRoleDto: CreateRoleDto): Promise<Role> {
        const newRole = this.roleRepository.create({
         profile:createRoleDto.profile,
         description:createRoleDto.description,
        });
        return this.roleRepository.save(newRole);
      }
      getRoles() {
        return this.roleRepository.find();
      }

      getRoleById(id: number) {
        return this.roleRepository.findOneBy({id})
      }
      delete(id: number){
        this.roleRepository.delete(id);
      }

  }