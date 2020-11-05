import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { UserService } from 'src/services/user.service';
import { CreateUserDto } from '../dto/user.dto';

@Controller('/users')
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

  @Get(':id')
  async getOneUser(@Param() id: string): Promise<User> {
    return this.userServices.getOneUser(id);
  }

  @Delete()
  async removeById(@Param() id: string): Promise<void> {
    return this.userServices.removeUser(id);
  }
}
