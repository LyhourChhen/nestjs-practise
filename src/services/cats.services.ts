import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';
import * as _ from 'lodash';
@Injectable()
export class CatsServices {
  private readonly cats: Cat[] = [{ age: 10, breed: 'haha', name: 'lyhour' }];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  deleteOne(name: String): Cat[] {
    _.remove(this.cats, n => {
      return n.name === name;
    });
    return this.cats;
  }
}
