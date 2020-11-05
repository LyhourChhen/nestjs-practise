import 'reflect-metadata';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { CatsServices } from 'src/services/cats.service';
import { Cat } from 'src/interfaces/cat.interface';
import { CreateCatDto, DeleteDto } from 'src/dto/create-cat.dto';
import { Request } from 'express';
import { Observable, of } from 'rxjs';

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

  @Get('redirecting')
  @Redirect('https://www.catbuyerguide.com/', 301)

  // Request Object test
  @Get('request')
  findAllObject(@Req() request: Request): string {
    console.log('request value:', request);
    return `This action returns all cats ${request}`;
  }

  // Accessing query parameter by http://localhost:3000/cats/docs?version=5
  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  // Stream / RXJS / PubSub
  @Get()
  findAllSteamRXJS(): Observable<any[]> {
    return of([]);
  }

  @Put()
  async updateCat(@Body() updateDto: CreateCatDto) {
    console.log('log dto', updateDto);
    return this.catsServices.updateCat(updateDto);
  }
}
