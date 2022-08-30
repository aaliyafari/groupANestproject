import { Module } from '@nestjs/common';
import { AddressController } from './controllers/address.controller';
import {TypeOrmModule} from '@nestjs/typeorm'
import { AddressService } from './services/address.service';
import { Address } from './typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Address]),],
  controllers: [AddressController],
  providers: [AddressService]
})

export class AddressModule {}