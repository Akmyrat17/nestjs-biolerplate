import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UsersEntity } from '../entities/user.entity';

@Injectable()
export class UsersRepository extends Repository<UsersEntity> {
  constructor(private datasource: DataSource) {
    super(UsersEntity, datasource.createEntityManager());
  }
  async getUserByPhone(phone_number: number) {
    return await this.createQueryBuilder('users')
      .select('users.phone_number')
      .where('users.phone_number = :phone_number', { phone_number })
      .getOne();
  }
}
