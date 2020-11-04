import 'reflect-metadata';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from 'src/dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  getOneUser(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  async removeUser(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }

  async createUser(user: CreateUserDto): Promise<void> {
    await this.userRepository.save(user);
  }
}
