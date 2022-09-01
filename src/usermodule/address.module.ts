import { Module } from '@nestjs/common';
import { AddressController } from './controllers/address.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AddressService } from './services/address.service';
import { Address } from './typeorm';
import { RoleController } from './controllers/role.controller';
import { RoleService } from './services/role.service';
import { Role } from './typeorm/role.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Role]),],
  controllers: [RoleController],
  providers: [RoleService]
})

export class RoleModule {}