import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator';

export class LoginDto {
  @ApiProperty()
  @IsNotEmpty()
  @Max(65999999)
  @Min(61000000)
  @IsNumber()
  phone_number: number;
}
