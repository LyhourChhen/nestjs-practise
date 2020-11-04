import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/Cat.interface';

@Injectable()
export class CatsServices {
  private readonly cats: Cat[] = [{ age: 10, breed: 'haha', name: 'lyhour' }];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
