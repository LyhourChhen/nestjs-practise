import 'reflect-metadata';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsServices } from 'src/services/cats.services';
import { Cat } from 'src/interfaces/Cat.interface';
import { CreateCatDto } from 'src/dto/create-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsServices: CatsServices) {}
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsServices.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsServices.findAll();
  }
}
