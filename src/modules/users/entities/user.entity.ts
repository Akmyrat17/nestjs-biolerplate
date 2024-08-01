import { RolesEnum } from 'src/common/enums';
import { BaseEntity } from 'src/database/enitities/base.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity {
  @Column()
  username: string;

  @Column()
  password: string;

  @Column({
    unique: true,
    type: 'integer',
    nullable: false,
  })
  phone_number: number;

  @Column({
    default: RolesEnum.USER,
  })
  role: RolesEnum;
}
