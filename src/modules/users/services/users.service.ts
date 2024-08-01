import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from '../dtos';
import { UsersRepository } from '../repositories';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async create(createUserDto: CreateUserDto) {
    const user = this.usersRepository.create(createUserDto);
    return await user.save();
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(phone_number: number) {
    return await this.usersRepository.findOne({ where: { phone_number } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
