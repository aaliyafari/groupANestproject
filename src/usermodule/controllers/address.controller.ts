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
  import { ApiTags } from '@nestjs/swagger';
  import { CreateAddressDto } from '../dtos/CreateAddress.dtos';
  import { AddressService } from '../services/address.service';
  
  @ApiTags('Address')
  @Controller('address')
  
  
  export class AddressController {
    constructor(private readonly addressService: AddressService) {}
  
    @Get()
    getAddress() {
      return this.addressService.getAddress();
    }
  
    @Get(':id')
    findAddressById(@Param('id', ParseIntPipe) id: number) {
      return this.addressService.findAddressById(id);
    }
  
    @Post('create')
    @UsePipes(ValidationPipe)
    createAddress(@Body() createAddressDto: CreateAddressDto) {
      return this.addressService.createAddress(createAddressDto);
    }
  
    @Delete('delete/:id')
    deleteAddress(@Param('id') id) {
      return this.addressService.delete(id);
    }
  
    @Patch(':id')
    updateAddress(@Param('id') id: any, @Body() createAddressDto) {
      return this.addressService.updateAddress(+id, createAddressDto);
    }
    @Put(':id')
    updateAllAddress(@Param('id') id: any, @Body() createAddressDto) {
      return this.addressService.updateAllAddress(+id, createAddressDto);
    }
   
  }
  
  