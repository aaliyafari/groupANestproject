import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
  
    Patch,
    Post,
    Put,
    Res,
    UploadedFile,
    UseInterceptors,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { FileInterceptor } from '@nestjs/platform-express';
  import { ApiTags } from '@nestjs/swagger';
  import { extname } from 'path';
  import { CreateUserDto } from '../dtos/CreateUser.dtos';
  import { UsersService } from '../services/users.service';
  import { diskStorage } from 'multer';
  import { fileURLToPath } from 'url';
import { RoleService } from '../services/role.service';
import { CreateRoleDto } from '../dtos/CreateRole.dtos';
  @Controller('role')
  @ApiTags('Role')
  
  export class RoleController {

    constructor(private readonly roleService: RoleService) {}
  
    @Get()
    getRole() {
      return this.roleService.getRoles();
    }
  
    @Get(':id')
    getRoleById(@Param('id', ParseIntPipe) id: number) {
      return this.roleService.getRoleById(id);
    }
  
    @Post('rolecreate')
    @UsePipes(ValidationPipe)
    createRole(@Body() createRoleDto: CreateRoleDto) {
      return this.roleService.createRole(createRoleDto);
    }
  
    @Delete('delete/:id')
    deleteUser(@Param('id') id) {
      return this.roleService.delete(id);
    }
  }