import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAddressDto } from '../dtos/CreateAddress.dtos';
// import { Address } from '../typeorm';


@Injectable()
export class AddressService {
    constructor(
        @InjectRepository(Address) private readonly addressRepository: Repository<Address>,
      ) {}
          
      createAddress(createAddressDto: CreateAddressDto) {
        const newAddress = this.addressRepository.create(createAddressDto);
        return this.addressRepository.save(newAddress);
      }
      // uploadFiles(createUserDto: CreateUserDto){
      //   const newFile=this.userRepository.create(createUserDto)
      //   return this.userRepository.save(newFile);
      // }
      getAddress() {
        return this.addressRepository.find();
      }

      findAddressById(id: number) {
        return this.addressRepository.findOneBy({id})
      }
      delete(id: number){
        this.addressRepository.delete(id);
      }


       async updateAddress(id: number, post: CreateAddressDto) {
        await this.addressRepository.update(id, post);
        const updatedAddress = await this.addressRepository.findOneBy({id});
        if (updatedAddress) {
          return updatedAddress;
        }
    }

    async updateAllAddress(id: number, post: CreateAddressDto) {
      await this.addressRepository.update(id, post);
      const updatedAllAddress = await this.addressRepository.findOneBy({id});
      if (updatedAllAddress) {
        return updatedAllAddress;
      }
      
  }
  }