import 'reflect-metadata';
import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CatsServices } from 'src/services/cats.services';
import { Cat } from 'src/interfaces/cat.interface';
import { CreateCatDto, DeleteDto } from 'src/dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsServices: CatsServices) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsServices.create(createCatDto);
  }

  @Delete()
  async delete(@Body() deleteDto: DeleteDto) {
    console.log('log name', deleteDto.name);
    this.catsServices.deleteOne(deleteDto.name);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsServices.findAll();
  }

  @Put()
  async updateCat(@Body() updateDto: CreateCatDto) {
    console.log('log dto', updateDto);
    return this.catsServices.updateCat(updateDto);
  }
}
