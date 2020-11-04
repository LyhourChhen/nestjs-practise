import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userServices: UserService) {}
  @Get()
  async getAllUser(): Promise<User[]> {
    return this.userServices.getAllUser();
  }
  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
    return this.userServices.createUser(createUserDto);
  }
}
