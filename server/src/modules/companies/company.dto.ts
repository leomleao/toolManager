import { IsString, Length } from 'class-validator';

export class CreateCompanyDto {
  @IsString() @Length(5, 128) readonly name: string;
}