import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CheckModule } from './check/check.module';

@Module({
  imports: [UsersModule, AuthModule, CheckModule],
})
export class AllModule {}
